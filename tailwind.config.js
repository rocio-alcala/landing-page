/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-out-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-50%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)"
          }
        },
        "fade-out-bottom": {
          "0%": {
            opacity: "0",
            transform: "translateY(50%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-60px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(60px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        pulse: {
          "0%": {
            transform: "scale(1)"
          },
          "50%": {
            transform: "scale(1.4)"
          },
          "100%": {
            transform: "scale(1)"
          }
        },
        sink: {
          "0%": {
            transform: "translateY(-10px)"
          },
          "50%": {
            transform: "translateY(0)"
          },
          "100%": {
            transform: "translateY(-10px)"
          }
        },
        appear: {
          "0%": {
            width: "0%"
          },
          "100%": {
            width: "100%"
          }
        },
        shadow: {
          "100%": {
            "box-shadow":
              "0px 7px 10px rgba(0, 0, 0, -0.002) 0px 56px 80px rgba(0, 0, 0, 0.04)"
          }
        }
      },
      animation: {
        "fade-out-top": "fade-out-top 1.8s",
        "fade-out-bottom": "fade-out-bottom 1.8s",
        "fade-in": "fade-in 1s ease-in",
        "fade-in-right": "fade-in-right 1s ease-in-out",
        "fade-in-left": "fade-in-left 1s ease-in-out",
        pulse: "pulse 1s ease-in-out",
        "slow-sink": "sink 3s ease-in-out infinite",
        sink: "sink 1s ease-in-out infinite",
        appear: "appear 1s ease"
      }
    }
  },
  plugins: []
};
