---
title: Publish to the App Store
order: 8
minutes: 20
device: Mac
summary: The developer membership, App Store Connect, and Apple's review.
---

Publishing is optional. Plenty of people build apps just for themselves and their family. If you want to share yours with the world, here's the path.

## 1. Join the Apple Developer Program

Sign up at **developer.apple.com/programs**. It costs **$99 a year**. You can enroll as an individual using your own name. Enrolling as an organization requires a business entity and a D-U-N-S number, which isn't necessary for a hobby app. You don't need an LLC to publish an app.

## 2. Set up your app in App Store Connect

At **appstoreconnect.apple.com**, create a new app and fill in:

- Name, subtitle and description (AI is great at drafting these)
- Screenshots (take them in the Simulator with Command-S)
- Category, age rating and price (free is simplest)
- A **privacy policy web page**. Even "This app collects no data" needs a web address. The [website path](../../website/) shows how to make one for free.
- **Privacy "nutrition label"** answers: if you collect nothing, it's quick.

## 3. Upload and submit

1. In Xcode, choose a real device type ("Any iOS Device"), then **Product › Archive**.
2. When the archive finishes, click **Distribute App** and follow the prompts to upload to App Store Connect.
3. Back in App Store Connect, attach that build to your app and click **Submit for Review**.

Apple's reviewers usually respond within a day or two. Rejections are common and usually come with a clear reason. Fix it, resubmit, and try again.

<div class="try">

**Try it now.** Before submitting, ask:

> I'm about to submit my first iPhone app to the App Store. It's [one-sentence description]. What are the most common reasons first apps get rejected, and how can I check mine for each?

</div>

## If you charge money

Apple keeps a commission on paid apps and in-app purchases. Small developers can apply for the **App Store Small Business Program** for a reduced rate (15% at the time of writing). You'll enter tax and banking information in App Store Connect. The [Money, honestly](../../money-honestly/) path covers realistic expectations.

<div class="takeaway">

**You've finished Build an iPhone app.** Whether you publish or not, you've learned to direct an AI through a real software project. That skill transfers to almost anything.

</div>
