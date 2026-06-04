
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/demo" | "/demo/playwright" | "/locations" | "/locations/butterskull_ranch" | "/locations/dwarven_excavation" | "/locations/gnomenguard" | "/locations/loggers_camp" | "/locations/mountains_toe_gold_mine" | "/locations/phandalin" | "/npcs" | "/plots";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/demo": Record<string, never>;
			"/demo/playwright": Record<string, never>;
			"/locations": Record<string, never>;
			"/locations/butterskull_ranch": Record<string, never>;
			"/locations/dwarven_excavation": Record<string, never>;
			"/locations/gnomenguard": Record<string, never>;
			"/locations/loggers_camp": Record<string, never>;
			"/locations/mountains_toe_gold_mine": Record<string, never>;
			"/locations/phandalin": Record<string, never>;
			"/npcs": Record<string, never>;
			"/plots": Record<string, never>
		};
		Pathname(): "/" | "/demo" | "/demo/playwright" | "/locations" | "/locations/dwarven_excavation" | "/npcs" | "/plots";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}