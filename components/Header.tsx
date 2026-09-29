"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { navItems, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className="absolute inset-0 bg-surface shadow-[0_1px_8px_rgba(0,0,0,0.1)]"
      />
      <div aria-hidden className="absolute inset-0 bg-surface/80 backdrop-blur-xl" />
      <div className="relative h-20 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
        <Link href="/" className="flex items-center gap-unit" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="h-10 w-10 object-contain"
            src="/JampeLogoSinFondo.png"
          />
          <span className="font-headline-md text-headline-md tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "transition-colors text-primary font-semibold"
                    : "text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface transition-colors"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-label-caps text-label-caps hover:bg-primary-container hover:text-on-primary-container transition-all"
          >
            Contacto
          </Link>
          <button
            type="button"
            className="lg:hidden w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} className="text-[22px]" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="relative z-10 lg:hidden border-t border-white/5 bg-surface px-margin-mobile py-6 flex flex-col gap-4">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  active
                    ? "text-primary font-semibold"
                    : "font-label-caps text-label-caps text-on-surface-variant"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-fit bg-primary text-on-primary px-6 py-2 rounded-full font-label-caps text-label-caps"
          >
            Contacto
          </Link>
        </div>
      ) : null}
    </header>
  );
}
