# FBTitle Fix

A browser extension that fixes Facebook's broken tab titles.

## The Problem

Facebook sets every tab title to "Facebook" regardless of what you are viewing. A group, a page, a profile, a marketplace listing: all show up as "Facebook" in your browser history and tab bar. Navigating back to something you visited earlier becomes a guessing game.

This has been a known annoyance for years. Reporting it to Facebook is possible in theory, but reaching anyone there is notoriously difficult. And even if feedback does get through, there is no guarantee it will ever be acted on. Facebook moves on its own schedule, for its own reasons.

So this extension fixes it locally, on your machine, without waiting for Facebook.

## What It Does

Reads the page or group name from the page header and sets it as the tab title. History entries now read `পেজের নাম | Facebook` or `আইডির নাম | Facebook` instead of `Facebook`.

Works across navigation: the title updates as you move between pages without reloading.

## Install

### Chrome / Edge (unpacked)

1. Go to `chrome://extensions`
2. Enable **Developer mode** (top right)
3. Click **Load unpacked**
4. Select this folder

### Firefox (temporary load)

1. Go to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Select the `manifest.json` file inside this folder

Note: temporary add-ons may be removed when Firefox closes. For a permanent install, use the signed version from the Firefox Add-ons store once available.

### Tampermonkey (all browsers)

Install via [Greasy Fork](https://greasyfork.org/en/scripts/577789-fbtitle-fix). Works with Tampermonkey or Violentmonkey.

## More Tools by the Same Author

- [DeleteThing](https://github.com/2u841r/DeleteThing) - [Chrome Web Store](https://chromewebstore.google.com/detail/deletething/kapmhilbefhcbhhcojjcjcncbnidiocg)

## Notes

- No data is collected or sent anywhere
- Only runs on `facebook.com`
- If Facebook changes its markup, open an issue
