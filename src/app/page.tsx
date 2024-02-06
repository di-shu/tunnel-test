import { TunnelToolbar } from "@tunnel/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {(process.env.NODE_ENV !== "development") && (

        <TunnelToolbar
          projectId={process.env.TUNNEL_PROJECT_ID}
          branch="main"
        />
      )}
    </main>
  );
}
