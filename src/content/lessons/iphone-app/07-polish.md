---
title: Polish, privacy and accessibility
order: 7
minutes: 15
device: Mac
summary: An icon, readable text, and respect for your users' privacy.
---

A little polish turns a working app into one you're proud to share.

## Give it an icon

1. Ask an AI image tool (ChatGPT and Gemini can make images) for a simple app icon: "A flat, simple app icon of a walking shoe on a green background, no text, square, 1024 by 1024 pixels."
2. In Xcode, open **Assets** in the file list and click **AppIcon**. Drag your image in.

## Make it easy to use for everyone

Ask your AI to review the app with prompts like these:

- "Make sure all text supports Dynamic Type, so it gets bigger when the user picks larger text in Settings."
- "Check that every button has an accessibility label for VoiceOver."
- "Make the buttons at least 44 points tall so they're easy to tap."
- "Make sure it looks right in Dark Mode."

Your own eyes and fingers are a great test. If something is hard for you to read or tap, fix it.

## Privacy by design

The simplest privacy policy is: **collect nothing**. If your app stores data only on the phone and doesn't use ads or analytics, you can truthfully tell Apple "Data Not Collected." Users appreciate it, and it makes publishing easier.

<div class="try">

**Try it now.**

> Review my SwiftUI app's code for anything that collects, sends or shares user data, including third-party libraries. List anything you find in plain English. Here's my code: [paste or attach]

</div>

<div class="warn">

**Good to know.** Avoid adding advertising or analytics libraries to a first app. They add complexity, privacy paperwork, and usually very little money.

</div>
