---
title: Run your app on your own iPhone
order: 5
minutes: 15
device: Mac and iPhone
summary: Put your app on your phone for free, without the App Store.
---

Seeing your own app on your own phone is a great moment. You can do it for free with your regular Apple Account.

## Steps

1. Connect your iPhone to your Mac with a cable. Unlock the phone and tap **Trust** if asked.
2. On the iPhone, turn on **Developer Mode**: **Settings › Privacy & Security › Developer Mode**, then restart when asked. (It only appears after you've connected to Xcode once.)
3. In Xcode, click your project's name at the top of the left-hand file list, choose the **Signing & Capabilities** tab, and under **Team** choose your name (Personal Team). If it isn't there, click **Add Account** and sign in.
4. In the device menu at the top of Xcode, choose your iPhone instead of a simulator.
5. Click **▶ Run**.
6. The first time, your iPhone may say the developer isn't trusted. Go to **Settings › General › VPN & Device Management**, tap your Apple Account email under Developer App, and choose **Trust**.

<figure class="diagram shot">
<a href="/media/xcode/signing-team.webp"><img src="/media/xcode/signing-team.webp" width="1200" height="803" loading="lazy" alt="Xcode’s Signing and Capabilities screen. A marks the project name at the top of the file list. B marks the Signing and Capabilities tab. C marks the Team menu, currently set to None. D marks a yellow warning that says signing requires a development team."></a>
<figcaption>Step 3 in Xcode. <b>A</b> your project name, <b>B</b> the Signing &amp; Capabilities tab, <b>C</b> the Team menu. <b>D</b> is the warning you’ll see until you pick a team. It goes away once you do.</figcaption>
</figure>

Your app's icon now sits on your home screen.

<figure class="phones" aria-labelledby="devmode-cap">
<div class="mini-phone" aria-hidden="true"><div class="mp-screen">
<p class="mp-title">Settings</p>
<ul class="mp-list" role="list"><li>General</li><li>Notifications</li><li>Sounds &amp; Haptics</li><li class="hit">Privacy &amp; Security<span class="mp-tap">tap</span></li><li>Battery</li></ul>
</div></div>
<div class="arrow" aria-hidden="true">→</div>
<div class="mini-phone" aria-hidden="true"><div class="mp-screen">
<p class="mp-title"><span class="mp-back">‹</span> Privacy &amp; Security</p>
<ul class="mp-list" role="list"><li>Location Services</li><li>Tracking</li><li class="mp-gap">Security</li><li class="hit">Developer Mode<span class="mp-tap">tap</span></li></ul>
</div></div>
<div class="arrow" aria-hidden="true">→</div>
<div class="mini-phone" aria-hidden="true"><div class="mp-screen">
<p class="mp-title"><span class="mp-back">‹</span> Developer Mode</p>
<ul class="mp-list" role="list"><li class="hit">Developer Mode <span class="mp-toggle on"></span></li></ul>
<p class="mp-note">Turning on Developer Mode requires a restart.</p>
</div></div>
<figcaption id="devmode-cap">A simplified drawing of step 2 on the iPhone. <b>1</b> In <b>Settings</b>, tap <b>Privacy &amp; Security</b> (scroll down to find it). <b>2</b> Scroll to the bottom and tap <b>Developer Mode</b>. <b>3</b> Turn it on. Your phone will restart. The labels may differ a little on your iOS version.</figcaption>
</figure>

## The seven-day catch

With a free account, apps you install this way stop opening after about seven days. Just connect and press Run again. A paid developer membership removes that limit and lets you share test versions with friends through Apple's **TestFlight** app.

<div class="try">

**Try it now.** Use your app for a few days, for real. Keep a list of anything annoying or missing. Then ask your AI assistant to help with the top three. Real use is the best design tool there is.

</div>

<div class="takeaway">

**The takeaway.** You're now a person who has built an app and installed it on their phone. Most people never get this far.

</div>
