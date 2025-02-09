import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Breakpoints personalizados
      screens: {
        'sm': '640px', // Telas pequenas
        'md': '768px', // Telas médias
        'lg': '1024px', // Telas grandes
        'xl': '1280px', // Telas extra grandes
        '2xl': '1536px', // Telas muito grandes
      },
      // Cores personalizadas
      colors: {
        primary: "#00FF00", // Verde estilo Matrix
        secondary: "#FFD700", // Dourado
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      // Espaçamentos personalizados
      spacing: {
        '4.5': '1.125rem', // Espaçamento personalizado
      },
      // Tamanhos de texto responsivos
      fontSize: {
        'responsive-sm': ['0.875rem', '1.25rem'], // Texto pequeno
        'responsive-md': ['1rem', '1.5rem'], // Texto médio
        'responsive-lg': ['1.25rem', '1.75rem'], // Texto grande
      },
      // Configurações de reflexão
      reflection: {
        position: {
          none: "none",
          above: "above",
          below: "below",
          left: "left",
          right: "right",
        },
        offset: {
          0: "0",
          1: "0.25rem",
          2: "0.5rem",
          3: "0.75rem",
          4: "1rem",
          5: "1.5rem",
          6: "2rem",
          7: "3rem",
          8: "4rem",
          9: "5rem",
          10: "6rem",
        },
        opacity: {
          0: "0",
          5: "0.05",
          10: "0.1",
          15: "0.15",
          20: "0.2",
          25: "0.25",
          30: "0.3",
          40: "0.4",
          45: "0.45",
          50: "0.5",
          55: "0.55",
          60: "0.6",
          70: "0.7",
          75: "0.75",
          80: "0.8",
          85: "0.85",
          90: "0.9",
          95: "0.95",
          100: "1",
        },
      },
      // Bordas personalizadas
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // Animações personalizadas
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    // Plugin para adicionar utilitários de reflexão
    function ({ addUtilities, theme }: { addUtilities: any; theme: any }) {
      const reflectionUtilities = {
        ".reflection": {
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            height: "100%",
            background: `linear-gradient(to bottom, rgba(0, 255, 0, ${theme(
              "reflection.opacity.50"
            )}), transparent)`,
            transform: "scaleY(-1)",
            opacity: theme("reflection.opacity.50"),
          },
        },
        ".reflection-below": {
          "&::after": {
            top: "100%",
          },
        },
        ".reflection-above": {
          "&::after": {
            top: "auto",
            bottom: "100%",
          },
        },
        ".reflection-left": {
          "&::after": {
            top: "0",
            left: "auto",
            right: "100%",
            width: "100%",
            height: "100%",
            transform: "scaleX(-1)",
          },
        },
        ".reflection-right": {
          "&::after": {
            top: "0",
            left: "100%",
            width: "100%",
            height: "100%",
            transform: "scaleX(1)",
          },
        },
      };
      addUtilities(reflectionUtilities);
    },
    require("tailwindcss-animate"), // Plugin de animações
  ],
};

export default config;