"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { smythe } from "./ui/font";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

const navigation = [
  { name: "About Us", href: "#" },
  { name: "Products", href: "#" },
  { name: "Our Team", href: "#" },
  { name: "Recipes", href: "#" },
];

export default function SplashPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      <Image
        className="absolute inset-0 object-cover w-full h-full"
        src="/hero-desktop.jpeg"
        alt=""
        width={1000}
        height={760}
      />
      <header className="border-b-2 border-gray-600 absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="/icon.png"
                alt="Nioh Cha Essence"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-yellow-500"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Navbar */}
          <div className="hidden lg:flex lg:gap-x-12 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${smythe.className} bg-gray-600 px-5 py-2.5 rounded-full ring-1 hover:ring-blue-500 text-lg font-semibold leading-6 text-yellow-500`}
              >
                {item.name}
              </Link>
            ))}
            <div className="bg-gray-100"></div>
            <Instagram className="h-6 w-6 text-yellow-500" aria-hidden="true" />
            <Twitter className="h-6 w-6 text-yellow-500" aria-hidden="true" />
            <Linkedin className="h-6 w-6 text-yellow-500" aria-hidden="true" />
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="#"
              className={`${smythe.className} bg-gray-600 px-5 py-2.5 rounded-full ring-1 hover:ring-blue-500 text-lg font-semibold leading-6 text-yellow-500`}
            >
              {/* Log in
            <ArrowRight /> */}
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src="/icon.png"
                  alt="Nioh Cha Essence"
                  width={50}
                  height={50}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {/* mobile navbar */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/* splash page */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="flex-row mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <Link href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div> */}
          </div>
          <div className=" text-center ">
            <h1
              className={`${smythe.className} text-4xl font-bold tracking-tight text-yellow-500 sm:text-6xl`}
            >
              Nioh Cha Essence
            </h1>
            <p
              className={`${smythe.className} mt-6 text-lg leading-8 text-yellow-500`}
            >
              Crafting Tranquility Through Authentic Japanese Tea
            </p>
            <p
              className={`${smythe.className} mt-6 text-lg leading-8 text-yellow-500`}
            >
              Discover the art of tea-making, immerse yourself in mindful
              rituals, and savor the serenity of Nihon Cha Essence where every
              cup is an ode to the soul-soothing essence of Japanese tea.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <Link
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link> */}
              <Link
                href="#"
                className={`${smythe.className} bg-gray-600 px-20 py-2.5 rounded-full ring-1 hover:ring-blue-500 text-2xl font-semibold leading-6 text-yellow-500`}
              >
                Shop <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}
