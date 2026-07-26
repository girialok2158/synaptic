interface WelcomeBannerProps {
  userName: string;
}

export default function WelcomeBanner({
  userName,
}: WelcomeBannerProps) {
  return (
    <section className="space-y-2">
      <p className="text-sm font-medium text-primary">
        Dashboard
      </p>

      <h1 className="text-4xl font-bold tracking-tight">
        Welcome back, {userName} 👋
      </h1>

      <p className="max-w-2xl text-muted-foreground">
        Stay focused, keep your momentum, and make today another productive
        study session.
      </p>
    </section>
  );
}