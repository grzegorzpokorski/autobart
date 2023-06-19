import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  isOpen: boolean;
  menuID: string;
  onClick: () => void;
};

export const NavbarToggler = forwardRef<HTMLButtonElement, Props>(
  ({ isOpen, onClick, menuID }, ref) => {
    const itemStyles =
      "ease h-0.5 w-8 bg-secondary transition duration-300 motion-reduce:transition-none";

    return (
      <button
        id="hamburger"
        className={twMerge(
          "relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden z-30",
        )}
        type="button"
        aria-label={`${isOpen ? "Zamknij" : "Otwórz"} menu nawigacyjne`}
        aria-expanded={isOpen}
        aria-controls={menuID}
        onClick={onClick}
        ref={ref}
      >
        <div
          className={twMerge(itemStyles, isOpen && "translate-y-2 rotate-45")}
        />
        <div
          className={twMerge(
            itemStyles,
            isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100",
          )}
        />
        <div
          className={twMerge(itemStyles, isOpen && "-translate-y-2 -rotate-45")}
        />
      </button>
    );
  },
);

NavbarToggler.displayName = "NavbarToggler";
