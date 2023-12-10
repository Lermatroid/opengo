import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { env } from "@/env.mjs";

export default function page() {
	return (
		<main className="flex items-center justify-center flex-col min-h-screen">
			<h1 className="font-black text-6xl">
				Open
				<span
					className="text-background "
					style={{ WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "black" }}
				>
					Go
				</span>
			</h1>
			<div className="max-w-[400px] w-full mt-10 border-accent p-5 border-2 rounded-lg space-y-2">
				<Input className="w-full" placeholder="Email" />
				<Input type="password" className="w-full" placeholder="Password" />
				<div className="grid grid-flow-col gap-2 w-full ">
					{env.NEXT_PUBLIC_SHOW_SIGNUP_BUTTON == "true" && (
						<Button variant="outline">Sign up</Button>
					)}
					<Button>Sign in</Button>
				</div>
			</div>
		</main>
	);
}

export const runtime = "edge";
