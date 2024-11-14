---
layout: post
title: Made my own whitelist for adlists
date: 2022-07-10
description: Here I go into why I made my own list and why you may need to aswell.
tags:
categories: posts
---

## So why make your own whitelist and what is a whitelist?

If your familiar with ad blockers then this is what it is essentially. A list (similar blocklist) listing domains that tells your ad blocker and/or your pi hole or AdGuard Home server to allow requests from the domains in that list to be processed.

The reason why I recommend that you make your own whitelist is because certain websites that you visit or your app that connects to the internet may be blocked by whatever extension or adblocking server. I had my fair share of this. My bank, yes seriously my bank! My bank has their domain CNAME to another server that my AdGuard Home instance blocks, of course there is a built in whitelist function but blacklists have a priority over the built in whitelist. Same thing happened to a game. So I decided to make my own whitelist that is dedicated to my needs since only my devices are configured to use the dns server in my household. Making the whitelist pretty much tells the adblocker or in my case my AdGuard Home server to allow the domains I specify to be processed.

## So how can I make my own whitelist?

It's quite easy if I'm being honest, once you know the rules for adblocking. Don't know? It's OK. Here's the documentation that should work for most adblock extensions & servers like AdGuard home: [https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#introduction](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#introduction)

If that article didn't help then try reading this one: [https://help.eyeo.com/en/adblockplus/how-to-write-filters](https://help.eyeo.com/en/adblockplus/how-to-write-filters)

So after reading up on those, you should now have a pretty good understanding how to mack filter lists. I'll give an example of a domain to whitelist:

    @@||tinyurl.com^*

This code whitelists [tinyurl.com](tinyurl.com), a well known link shortener service. In certain block list this domain could be blocked. You may be wondering (if you read the articles I had linked) that I added `^*` to the end of the domain. This ensures that the domain & all it's pages can load without being blocked. This is from personal experience but most cases `@@||(domain here)` should do the trick.

You can checkout my whitelist & use it as a reference. Or you can use it, all up to you! [https://aaronplayzgaming.com/recommended-whitelist.txt](https://aaronplayzgaming.com/recommended-whitelist.txt)

> Written with [StackEdit](https://stackedit.io/).
