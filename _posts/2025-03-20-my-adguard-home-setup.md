---
layout: post
title: My Adguard Home DNS Setup
date: 2025-03-20
description: For a while I have been expeirmenting my configurations, now I feel like sharing my journey and my configurations.
tags: Linux, DNS
categories: posts
toc:
  sidebar: left
---

> This post was originally posted on September 12, 2024. This is updated to include new settings.

## My start with DNS servers

Starting out early in my IT journey and taking privacy, and security in mind. After reading articles and watching videos online. Using a different DNS server can sometimes be a small improvement to your online experience. For this reason I had always pointed my devices to quad9 or Cloudflare servers because of were they are based and their logging policies.

## Using Pihole

Now, I do not have any hate for pihole, I could never seem to find my way around the menu. To many this software does wonders. For me, it felt too technical to use and stuck with DNS servers that filter ads and more with providers like AdGuard DNS. For a while this suited my needs, then I wanted to include more extensive lists to expand the coverage.

Sure using providers like AdGuard DNS or NextDNS are awesome. The only factor that keeps me from using them are having to pay monthly to keep the filtering service active as most limit the free tier to around 300k requests a month. I did use NextDNS on my phone exclusively for a while to see if I could hit that monthly limit. I have to say, it's not, so bad live off on the free tier if only one device is pointed to the server with your identifier.

## The release of AdGuard Home

When this software came out, I decided to try it out and deployed it on my network. To me this software has a more modern take on handling DNS request and the ability to use DNS-Over-HTTPS and DNS-Over-TLS protocol. Something that pihole can not do out of the box without you having to set up additional software to use DNS-Over-HTTPS.

AdGuard Home can handle different types rules when it comes to blocking IP's and domains. It understands traditional rules used in ad blocking extensions, host-style (IP addresses), or just a list of domain names.

Since AdGuard Home is a self-host solution, you have more control over what it can do compared to a cloud solution like AdGuard DNS in terms of fine-tuning to your liking.

## My configuration

There are many ways to set up AdGuard Home as there a few ways to block and whitelist domains. I have closely followed yokoffing's guide on [NextDNS-Config](https://github.com/yokoffing/NextDNS-Config) as a based for filters. The rest of my config was inspired from Reddit posts I saw and experimenting with settings. Any area that I do not cover should be left alone at the default.

### General settings

> ##### TIP
>
> Most lists, including the ones I'm using update once a day.
{: .block-tip }

Filter update interval: 24 hours

> ##### WARNING
>
> These web services preforms API lookups on the domains you browse.
> Do not enable if this is a concern.
{: .block-warning }

Optional: Enable AdGuard browsing security web service

Optional: Enable AdGuard parental control web service

> ##### TIP
>
> Logs can be handy when needing to whitelist domains.
> Set the rotation lower if you wish.
{: .block-tip }

Enable log(on by default):

Optional: Anonymize client IP

Query logs rotation: 30 days

> ##### TIP
>
> This keeps track of request made, how many are blocked, etc.
> It is what is shown on the dashboard page.
{: .block-tip }

Enable statistics (on by default):

Statistics retention: 30 days

## Settings

### DNS settings

#### Upstream DNS servers:

> ##### TIP
>
> h3 is DNS-over-HTTPS with forced HTTP/3 and no fallback to HTTP/2 or below
{: .block-tip }

```bash
h3://dns.cloudflare.com/dns-query
h3://1.1.1.1/dns-query
h3://1.0.0.1/dns-query
h3://[2606:4700:4700::1111]/dns-query
h3://[2606:4700:4700::1001]/dns-query
h3://unfiltered.adguard-dns.com/dns-query
h3://94.140.14.140/dns-query
h3://94.140.14.141/dns-query
h3://dns.nextdns.io/
```

> ##### TIP
>
> This helps to speed up resolving to hit the fastest DNS server
{: .block-tip }


Set mode to Parallel requests

#### Fallback DNS servers:

Leave this entry empty, servers listed above will be used to resolve DNS requests

#### Bootstrap DNS servers:

> ##### TIP
>
> Needed since DNS-over-HTTPS servers are specified for upstream
{: .block-tip }

```bash
1.1.1.1
1.0.0.1
2606:4700:4700::1111
2606:4700:4700::1001
94.140.14.140
94.140.14.141
2a10:50c0::1:ff
2a10:50c0::2:ff
```

#### Upstream timeout

```bash
1000
```

#### DNS server configuration:

> ##### TIP
>
> Rate limit is per client/device per second. 20 is a good starting point, you may want to increase this. I use 1000 because it is near impossible to hit this limit when deploying this in a public setting like at an office or running a homelab.
{: .block-tip }

Rate limit: 1000

Subnet prefix length for IPv4 addresses: 24 (default)

Subnet prefix length for IPv6 addresses: 56 (default)

**Leave EDNS client subnet disabled or disable if enabled**

Enable DNSSEC

> ##### TIP
>
> AdGuard Home understands several types of syntax, Null IP ensures what we want blocked is blocked
{: .block-tip }

Blocking mode: Null IP

Blocked response TTL: 10

#### DNS cache configuration:

Cache size (in bytes):

```bash
10000000
```

Leave override minimum and maximum TTL empty

Enable Optimistic caching

> ##### TIP
>
> I recommend clearing the cache occasionally if loading times feel slow.
{: .block-tip }

#### Access settings:

Feel free to utilize this section, can be handy if the DNS server is reachable from outside your local network.

Leave version.bind, id.server, and hostname.bind filled in the disallowed domains section. Do not add webite URLs to be blocked here, it won't be tracked for statistics.


### Encryption settings

This requires for you to have a domain to use if you want to use DNS-over-HTTPS or DNS-over-TLS. Adguard has made a guide to set up encryption. You can this at [https://github.com/AdguardTeam/AdGuardHome/wiki/Encryption](https://github.com/AdguardTeam/AdGuardHome/wiki/Encryption).

### Client settings

This setting is particularly useful if you want to customize blocked services, set different DNS upstreams, and set identifiers. This is handy if you utilize the allow client feature in the DNS settings page.

### DHCP settings

It is only recommeded to use this feature if your router like ones from AT&T, it can be benefital to use this to get around this roadblock of havig to configure every device on your network.

#### DHCP IPv4 Settings

Gateway IP: You would use your routers IP here in my case with an AT&T hardware it is 192.168.1.254. The software should have it correctly listed on the page.

Range of IP addresses: 192.168.1.64 - 192.168.2.253
You can use whatever range you like, just make sure your subnet mask is correct for the range

Subnet mask: 255.255.255.0

DHCP lease time (in seconds): 86400

#### DHCP IPv6 Settings

Here you can pick your range, if you are using an AT&T gateway like me, you need to disable DHCP for both IPv4 and IPv6 so that Adguard Home is the only one advertising DHCP for all devices.

## Filters

This is how the software understand what to block and what to not block, and can also preform rewrites

### DNS blocklists

Any list specified here will block the domains that are listed.

Some of these lists can be added by clicking the "Add blocklist" then click "Choose from the list"

Lucky for us the lists I am using are in this list.

Go ahead and put a checkmark on the following:

- HaGeZi's Pro Blocklist
- WindowsSpyBlocker
- Dandilion Sprout's Anti-Malware List
- HaGeZi's Threat Intelligence Feeds
- Phishing URL Blocklist (PhishTank and OpenPhish)

These lists should give you an overall good protection against ads, trackers, and malware. However, **not all ads** can be **blocked at the DNS level**. You will need a extension/addon to take care of the ads that aren't blocked by AdGuard Home.

If you use Firefox or any fork you can use yokoffing filterlists guide for a great uBlock Origin setup. [Link to guide](https://github.com/yokoffing/filterlists#guidelines).

If using chrome, I recommend you consider Brave browser. Which has a built in ad-blocker.

### DNS allowlists

Any list here will allow blocked domains to be resolved. Unlike the blocklists page, there isn't any built-in lists to choose from. The easy way to whitelist domain is to click unblock on the request that was blocked in the query log page.

Alternatively you can host your list on GitHub or anywhere the .txt file is accessible. You can refer to my make a whitelist post [here](https://www.aaronplayzgaming.com/blog/2022/make_a_whitelist/) to learn how to write one.

### DNS rewrites

This lets you rewite domain names to an IP of your choice. Useful if you are running a home lab. For example, you can use .local as this will only resolve within your local network. It can also stop domains like .zip that either redirects to a scam site or execute malware on your computer.

Add the following domains to the page exactly as you see it in the table below.

| Domain       | Answer    |
| ------------ | --------- |
| `*.zip`      | `0.0.0.0` |
| `*.cfd`      | `0.0.0.0` |
| `*.discount` | `0.0.0.0` |
| `*.gdn`      | `0.0.0.0` |
| `*.loan`     | `0.0.0.0` |
| `*.loans`    | `0.0.0.0` |
| `*.ooo`      | `0.0.0.0` |
| `*.sbs`      | `0.0.0.0` |

The `*` is used as a wildcard, targeting every domain regardless if the domain has a subdomain. The answer `0.0.0.0` leads to nowhere, thus being unable to resolve the domain.

### Blocked services

This is a personal preference, I encourage you to look through this list and toggle the website/service that you want blocked. There is a feature if you should want to pause this filter on a schedule.

### Custom filtering rules

Wanted to know where your selection goes when you unblock or block a domain from the query log is saved? It is saved here! Nothing much else to mention here besides for the domains that I have blocked in addition to the blocklists.

```bash
||acfeedbackws.icloud.com^
||api-adservices.apple.com^
||feedbackws.fe.apple-dns.net^
||feedbackws.icloud.com^
||iadsdk.apple.com^
||notes-analytics-events.apple.com^
||notes-analytics-events.news.apple-dns.net^
||weather-analytics-events.apple.com^
||weather-analytics-events.news.apple-dns.net^
||syndication.twitter.com^
||events.gfe.nvidia.com^
||mask.icloud.com^
||mask-h2.icloud.com^
||mask-canary.icloud.com^
```

## Wrap up

This is it, my config. Feel free to use it as a base or use it as is.

## Sources

AdguardTeam. (2023a, April 18). DHCP. GitHub. https://github.com/AdguardTeam/AdGuardHome/wiki/DHCP

AdguardTeam. (2023b, August 30). Encryption. GitHub. https://github.com/AdguardTeam/AdGuardHome/wiki/Encryption

yokoffing. (2022). Setup guide for NextDNS, a DoH proxy with advanced capabilities. GitHub. https://github.com/yokoffing/NextDNS-Config

yokoffing. (2022). Setup guide for NextDNS, a DoH proxy with advanced capabilities. GitHub. https://github.com/yokoffing/NextDNS-Config
