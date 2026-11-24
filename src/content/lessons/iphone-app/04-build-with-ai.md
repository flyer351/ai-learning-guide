---
title: Build your first feature with AI
order: 4
minutes: 20
device: Mac
summary: Describe a screen, let AI write the code, and see it appear.
---

There are two common ways to have AI write your app's code. Both work. Start with whichever feels more comfortable.

## Option 1: AI inside Xcode

Recent versions of Xcode include built-in AI help, sometimes called **Coding Intelligence**. You can connect it to an assistant like ChatGPT or Claude in Xcode's settings, then describe what you want in a chat panel beside your code. It edits the files for you. Ask your assistant, "How do I turn on the AI chat in my version of Xcode?" if you can't find it.

## Option 2: Copy and paste

Use your normal AI assistant in a browser window next to Xcode. Ask it for code, then paste the code into Xcode. It's slower, but you see every change.

## Your first request

Open your plan from lesson 2 and send something like this:

<div class="try">

**Try it now.** Adapt this to your idea:

> I'm a beginner building an iPhone app in SwiftUI with Xcode. The app is called WalkLog. Replace ContentView with a screen that shows a list of walks. Each walk has a date and a distance in miles. Add a "+" button that opens a form to add a walk, and save the walks on the phone so they're still there next time. Use the simplest approach that's appropriate for a beginner. Explain what each part does in plain English.

</div>

Run the app (Command-R). If it works, celebrate. If it shows red errors, that's normal: lesson 6 covers fixing them.

## Build in small steps

Add one feature at a time, and run the app after each change:

1. "Add a total of this week's miles at the top."
2. "Let me swipe left on a walk to delete it."
3. "Add a simple bar chart of miles per day for the last 7 days."

Small steps make problems easy to find. If a change makes things worse, say "Undo that last change" or use **Edit › Undo**.

<div class="warn">

**Good to know.** Before big changes, save a copy of your project folder (or learn Xcode's built-in "source control" later). A backup lets you experiment without fear.

</div>
