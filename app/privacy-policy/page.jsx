import Link from "next/link";

export const metadata = {
  title: "Shriekseek — Privacy Policy",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#11120f] px-6 py-12 text-[#e5dec9] sm:px-8 sm:py-16">
      <article className="mx-auto max-w-3xl text-[17px] leading-[1.7]">
        <Link href="/shriekseek" className="text-sm text-[#efd68f] underline underline-offset-4">
          ← Back to Shriekseek
        </Link>

        <h1 className="mt-8 text-4xl font-bold leading-tight sm:text-5xl">
          Shriekseek
          <br />
          Privacy Policy
        </h1>

        <p className="mt-3 text-[#b9b4a5]">Development version · Last updated 7 October 2026 · Silly Goose</p>

        <p className="mt-6 rounded-lg border border-[#766743] bg-[#242219] px-5 py-4">
          This notice describes the current Android test build. Public-release contact details and advertising privacy choices are still being prepared. This version uses Google test ads and does not generate advertising revenue.
        </p>

        <Section title="Your game data">
          Campaign progress, sound preferences, graphics preferences and control layouts are stored on your device. Loading-performance reports are also saved locally. Tutorial state is held in memory during play. The game does not require an account or upload these saves to a developer-operated server. Clearing the app&apos;s storage removes these local records and resets your progress and settings.
        </Section>

        <Section title="Advertising">
          <p>The Android build uses Google&apos;s mobile advertising SDK through the Poing Studios Godot plugin. It offers an optional rewarded ad after death and an interstitial ad between completed levels. Declining a revive leaves Retry Level available. If an interstitial cannot be served, progression continues.</p>
          <p className="mt-4">Google&apos;s SDK can collect and share IP addresses (including inferred approximate location), advertising and other device/account identifiers, ad interactions, and diagnostic/performance information. Google uses this information for advertising, measurement and fraud prevention. Its SDK encrypts transmitted data using TLS. Google handles this information under its policies; test ads should not be understood as a promise that no information is transmitted.</p>
        </Section>

        <Section title="Your choices">
          You can choose whether to watch a rewarded ad. Android settings provide controls for your advertising ID; available controls depend on your Android version. Resetting or deleting that ID does not erase every record already held by an advertising provider. You can clear the game&apos;s local data through Android&apos;s app settings.
        </Section>

        <Section title="External services and retention">
          <p>Opening the developer website or Google&apos;s privacy information takes you outside the game. Those services apply their own privacy practices. Local game records remain until cleared or removed with the app. Google&apos;s retention and deletion practices are explained in <a className="text-[#efd68f] underline underline-offset-4" href="https://policies.google.com/privacy">Google&apos;s Privacy Policy</a>. Read more about <a className="text-[#efd68f] underline underline-offset-4" href="https://policies.google.com/technologies/ads">Google advertising technologies</a>.</p>
        </Section>

        <Section title="Contact and updates">
          <p>Developer website: <a className="text-[#efd68f] underline underline-offset-4" href="https://sajed-khan.github.io/Portfolio-Website/">Developer portfolio</a>.</p>
          <p className="mt-4">A dedicated public privacy contact has not yet been configured for this development build. It must be added before public release. This notice will be updated when the game&apos;s data practices change; check the date above for the latest version.</p>
        </Section>

        <footer className="mt-12 border-t border-[#514a37] pt-5 text-[#b9b4a5]">
          This draft accompanies the privacy notice available inside Shriekseek under Options → Privacy → Privacy policy.
        </footer>
      </article>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-9">
      <h2 className="text-2xl font-semibold text-[#dac082]">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
