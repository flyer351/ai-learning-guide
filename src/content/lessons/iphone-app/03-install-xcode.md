---
title: Install Xcode and make your first project
order: 3
minutes: 20
device: Mac
summary: Set up Apple's free app-building software and see a "Hello, world" app run.
---

**Xcode** is Apple's free app for building iPhone, iPad and Mac apps. It's large, so start the download and make a cup of coffee.

## Install it

1. Open the **App Store** on your Mac.
2. Search for **Xcode** and click **Get**. It's a big download, often 10 GB or more.
3. Open Xcode when it finishes. It may ask to install extra components and which platforms you want. Choose **iOS** and let it finish.
4. If it asks for your Apple Account, sign in with the one you already use for your iPhone. That's free.

## Create your first project

1. In Xcode, choose **Create New Project** (or **File › New › Project**).
2. Pick **iOS**, then **App**, then **Next**.
3. For **Product Name**, type something like `WalkLog`. For **Organization Identifier**, type `com.` followed by your name or family name with no spaces, such as `com.smithfamily`. (The **Next** button stays gray until this box is filled in.) For **Interface** choose **SwiftUI**, and for **Language** choose **Swift**. Leave the rest as is.
4. Choose where to save it (your Documents folder is fine) and click **Create**.

Here’s what those two screens look like:

<figure class="diagram shot">
<a href="/media/xcode/new-project-template.webp"><img src="/media/xcode/new-project-template.webp" width="1200" height="858" loading="lazy" alt="Xcode’s template chooser. A marks the iOS tab, B marks the App template, and C marks the Next button."></a>
<figcaption>The template chooser. <b>A</b> the iOS tab, <b>B</b> the App template, <b>C</b> Next. Tap a picture to see it larger.</figcaption>
</figure>

<figure class="diagram shot">
<a href="/media/xcode/new-project-options.webp"><img src="/media/xcode/new-project-options.webp" width="1200" height="718" loading="lazy" alt="Xcode’s project options. A marks Product Name, filled in with WalkLog. B marks Organization Identifier. C marks Interface set to SwiftUI and Language set to Swift. D marks the Next button."></a>
<figcaption>The options screen. <b>A</b> Product Name, <b>B</b> Organization Identifier, <b>C</b> SwiftUI and Swift, <b>D</b> Next.</figcaption>
</figure>

## Run it

Here's a simplified map of the Xcode window, so you know where to look. The letters match the list below the drawing.

<figure class="diagram">
<a href="/media/xcode-window.svg"><img src="/media/xcode-window.svg" width="640" height="420" alt="Simplified drawing of the Xcode window. A, the Run button, is at the top left. B, the device menu, is at the top centre and reads WalkLog, iPhone 17. C, the list of files, runs down the left side. D, your code, is in the middle. E, the preview of the app, is on the right and shows Hello, world!"></a>
<figcaption>A simplified drawing, not a screenshot, so your Xcode may look a little different. Tap it to see it larger.</figcaption>
</figure>

<ul class="legend">
<li><b>A</b><span><strong>Run button</strong> (▶). Builds your app and starts it.</span></li>
<li><b>B</b><span><strong>Device menu.</strong> Chooses where the app runs: a pretend iPhone (the Simulator) or your own phone.</span></li>
<li><b>C</b><span><strong>Your files.</strong> Click one to open it. <code>ContentView</code> is your app's first screen.</span></li>
<li><b>D</b><span><strong>Your code.</strong> This is where AI's code goes.</span></li>
<li><b>E</b><span><strong>Preview.</strong> A live picture of the screen you're working on. If it's hidden, choose <strong>Editor › Canvas</strong>.</span></li>
</ul>

1. At the top of the Xcode window, there's a device menu. Choose an iPhone model, such as "iPhone 17."
2. Click the **▶ Run** button (top left), or press Command-R.
3. After a minute, a pretend iPhone, the **Simulator**, appears with "Hello, world!" on the screen.

<figure class="diagram shot">
<a href="/media/xcode/run-and-device-menu.webp"><img src="/media/xcode/run-and-device-menu.webp" width="1200" height="564" loading="lazy" alt="The top of the Xcode window. A marks the Run button at the top left. B marks the device menu, opened to show a list of iPhone and iPad models."></a>
<figcaption>The real thing, with the device menu open. <b>A</b> Run, <b>B</b> the device menu. Your list of iPhones may differ.</figcaption>
</figure>

<figure class="diagram shot phone-shot">
<img src="/media/xcode/simulator-hello-world.webp" width="600" height="1292" loading="lazy" alt="The Simulator: a pretend iPhone on the Mac screen showing a small globe and the words Hello, world!">
<figcaption>Success: the Simulator showing your first app.</figcaption>
</figure>

That's a real app, running. Every app you build starts like this.

<div class="try">

**Try it now.** If anything didn't match what you see, describe it to your AI assistant:

> I'm new to Xcode. I'm trying to create a new iOS app project and run it in the simulator, but [describe what happened, and paste any error message]. What should I do?

Screens change with each Xcode version, so this is the fastest way to get unstuck.

</div>

<div class="takeaway">

**The takeaway.** You now have a working app project. Next, you'll use AI to turn "Hello, world" into your idea.

</div>
