import Reveal from "../components/ui/Reveal";
import TextReveal from "../components/ui/TextReveal";
import Button from "../components/ui/Button";
import { fadeUp, scaleIn } from "../lib/motion";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-32 text-center">
      <Reveal variants={scaleIn} className="text-8xl font-black tracking-tight text-navy/10 md:text-9xl">
        404
      </Reveal>
      <TextReveal
        as="h1"
        text="This page wandered off."
        className="mt-4 text-3xl font-bold tracking-tight text-navy md:text-4xl"
      />
      <Reveal variants={fadeUp} delay={0.3} className="mt-4 max-w-sm text-navy/60">
        The page you're looking for doesn't exist, or may have moved.
      </Reveal>
      <Reveal variants={fadeUp} delay={0.45} className="mt-9">
        <Button to="/" variant="primary">
          Back to home
        </Button>
      </Reveal>
    </section>
  );
}
