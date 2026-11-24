---
title: When things break
order: 6
minutes: 15
device: Mac
summary: How to read errors and get AI to fix them, calmly.
---

Every app builder, from beginner to expert, spends a lot of time fixing problems. It isn't a sign you're doing it wrong. It's the job.

## Two kinds of problems

1. **Build errors.** Xcode shows red marks and won't run the app. The code has a mistake Xcode can see.
2. **Bugs.** The app runs but does the wrong thing, such as a button that doesn't respond or a total that's off.

## Fixing build errors

1. Click the red mark to see the error message.
2. Copy the exact message, plus the code around it.
3. Give both to your AI:

<div class="try">

**Try it now.** Keep this template handy:

> My SwiftUI app won't build. Here is the error message: [paste]. Here is the file it's in: [paste the whole file]. Explain the problem in plain English and give me the corrected file.

</div>

If you're using the AI inside Xcode, there's often a button to ask it to fix the error directly.

## Fixing bugs

Describe it like a good maintenance ticket: what you did, what you expected, what happened instead.

> When I add a walk and close the app, the walk is gone when I reopen it. I expected it to be saved.

## When you're going in circles

- **Start a fresh conversation.** Long chats can confuse the AI. Paste your current code and describe the problem anew.
- **Ask for a simpler approach.** "This is getting complicated. Is there a simpler way to do this for a beginner?"
- **Go back to the last version that worked** and try a different request.
- **Take a break.** Seriously.

<div class="takeaway">

**The takeaway.** Copy the exact error, give context, change one thing at a time. That's 90% of debugging.

</div>
