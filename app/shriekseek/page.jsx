import React from "react";

const videos = {
  hollow: "/Hollow.mp4",
  elias: "/Elias.mp4",
  gameplay: "/Gameplay.mp4",
};

const aiStates = [
  {
    name: "Roaming",
    description: "Just wandering around, minding its own business",
  },
  {
    name: "Chasing",
    description: "It spots you, and suddenly it's very interested",
  },
  {
    name: "Searching",
    description: "You break line of sight? It'll check your last known spot",
  },
  {
    name: "Attacking",
    description: "Get too close, and it's game over",
  },
];

const movementDetails = [
  "8-directional movement that actually feels smooth",
  "Diagonal steps that don't mess up your timing (fixed that speed multiplier thing)",
  "Collision checks that actually work without you getting stuck on everything",
  "Walk cycles that don't restart every single step - just continuous, natural movement",
];

const littleDetails = [
  "Sprite sorting that makes sense - characters render above or below each other depending on where they are on screen. It's one of those things you don't notice when it works, but you definitely notice when it doesn't.",
  "The enemy sprite flips to face the right direction, and there's a little turn animation that plays when it switches. Subtle, but adds a lot.",
  "Death screen that just works - full overlay, retry button, clean restart. Nothing fancy, but it's solid.",
];

const nextSteps = [
  "More environment stuff so there's actually somewhere interesting to run around",
  "Sound design (because horror without audio is just... walking)",
  "Probably some puzzles or objectives to give the player something to do besides run",
];

const VideoBlock = ({ src, label }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const videoSrc = `${basePath}${src}`;

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-lg shadow-black/30">
      <video
        className="aspect-video w-full bg-black object-cover"
        src={videoSrc}
        controls
        autoPlay
        muted
        loop
        preload="metadata"
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <div className="border-t border-white/10 px-4 py-3 text-sm text-white/60">
        {label}
      </div>
    </div>
  );
};

const Section = ({ eyebrow, title, children }) => (
  <section className="border-t border-white/10 pt-10">
    {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
    <h2 className="h2 mt-4">{title}</h2>
    <div className="mt-5 space-y-5 text-white/72">{children}</div>
  </section>
);

const Shriekseek = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto py-12 xl:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="eyebrow">Godot + C# Survival Horror</p>
            <h1 className="h1 mt-4">Shriekseek</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/78">
              A top-down survival horror thing I&apos;m building in Godot with C#.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-y border-white/10 py-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
            <p>
              <span className="text-white/90">Status:</span> Still chipping away
              at this - updated September 2026
            </p>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest">
              {["Godot", "C#", "AI State Machine", "Survival Horror"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-accent font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <VideoBlock src={videos.gameplay} label="Gameplay" />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="space-y-12">
            <Section title="So, what's this game about?">
              <p>
                It&apos;s a little horror project I&apos;ve been tinkering with. You play
                as someone trying to survive in a hostile space, and there&apos;s this
                thing chasing you. The whole deal is about outmaneuvering the
                monster, using the environment to your advantage, and trying not
                to get caught.
              </p>
              <p>
                Simple premise. But getting the feel right has been the fun part.
              </p>
            </Section>

            <Section eyebrow="What I've Been Working On" title="The Monster's Brain">
              <p>
                The enemy has a mind of its own now (well, kind of). I built a
                state machine that controls how it behaves:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {aiStates.map((state) => (
                  <div
                    key={state.name}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
                  >
                    <h3 className="text-lg font-semibold text-accent">{state.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/68">
                      {state.description}
                    </p>
                  </div>
                ))}
              </div>
              <p>
                It uses vision rays to see you, checks if you&apos;re on screen, and
                decides when to give chase. The whole thing feels surprisingly
                organic now.
              </p>
              <VideoBlock src={videos.hollow} label="The Hollow" />
            </Section>

            <Section title="Moving Around">
              <p>The player movement took some time to get right:</p>
              <ul className="space-y-3">
                {movementDetails.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <p>
                Walking around should feel good in a game like this, you know? I
                think it&apos;s getting there.
              </p>
              <VideoBlock src={videos.elias} label="Elias movement test" />
            </Section>

            <Section title="The Little Details">
              <p>Some stuff I&apos;m pretty happy with:</p>
              <ul className="space-y-4">
                {littleDetails.map((detail) => (
                  <li key={detail} className="border-l-2 border-accent/60 pl-4">
                    {detail}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="A few things I'm proud of">
              <p>
                Honestly? Getting the enemy AI to feel fair but scary was tricky.
                It can&apos;t be too dumb (where&apos;s the tension?), but it also can&apos;t
                be unfair (that&apos;s just frustrating). The current tuning feels like
                a good balance - the player can outrun it in open spaces, but if
                you&apos;re not paying attention, it will catch you.
              </p>
              <p>
                The collision stuff was a whole thing too. Went from oversized
                hitboxes to tight 32x40 colliders, and the catch detection uses
                multiple methods now so it actually works reliably without
                feeling cheap.
              </p>
            </Section>

            <Section title="What's next?">
              <ul className="space-y-3">
                {nextSteps.map((step) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <p>
                This has been a fun project to sink time into. Lots of iteration,
                lots of learning, and it&apos;s starting to actually look and feel like
                a real game. Let me know what you think!
              </p>
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shriekseek;
