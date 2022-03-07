<template>
  <div class="relative bg-zinc-900 overflow-hidden">
    <div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
      <svg
        class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-zinc-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
        width="364"
        height="384"
        viewBox="0 0 364 384"
        fill="none"
      >
        <defs>
          <pattern
            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="364"
          height="384"
          fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
        />
      </svg>
    </div>
    <div class="relative pt-6 pb-16 sm:pb-24">
      <Popover>
        <nav
          class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="https://www.flowphantom.com/">
                <span class="sr-only">Flow Phantom</span>
                <img
                  class="h-8 w-auto sm:h-10"
                  src="https://uploads-ssl.webflow.com/5f2db414debf224265e037de/621cb9f520c327b0b78df2e8_Logo_website.png"
                  alt=""
                />
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton
                  class="bg-k800 rounded-md p-2 inline-flex items-center justify-center text-zinc-400 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                >
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden space-x-10 md:flex md:ml-10">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="font-medium text-white hover:text-zinc-300"
                >{{ item.name }}</a
              >
            </div>
          </div>
          <!-- <div class="hidden md:flex">
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-zinc-600 hover:bg-zinc-700"
            >
              Dashboard &rarr;
            </a>
          </div> -->
        </nav>

        <transition
          enter-active-class="duration-150 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://uploads-ssl.webflow.com/5f2db414debf224265e037de/621cb9f520c327b0b78df2e8_Logo_website.png"
                    alt=""
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-zinc-400 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50"
                  >{{ item.name }}</a
                >
              </div>
              <!-- <a
                href="#"
                class="block w-full px-5 py-3 text-center font-medium text-purple-600 bg-zinc-50 hover:bg-zinc-50"
              >
                Log in
              </a> -->
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
      <main class="mt-16 sm:mt-24">
        <div
          class="bg-zinc-800 py-24 sm:px-24 xl:rounded-lg overflow-hidden mx-auto max-w-7xl"
        >
          <Hero @get-SKUs="getSKUs" />
          <SkuTable @export-CSV="exportCSV" :SKUs="SKUs" />
          <div class="mt-12">
            <a
              href="https://flowphantom.com"
              class="text-base text-center text-green-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              All Flow Phantom Webflow E-commerce tools &rarr;
            </a>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';
import { ChevronRightIcon } from '@heroicons/vue/solid';
import exportFromJSON from 'export-from-json';
const navigation = [
  { name: 'Home', href: 'https://www.flowphantom.com/' },
  { name: 'Dashboard', href: 'https://dashboard.flowphantom.com/' }
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronRightIcon,
    MenuIcon,
    XIcon
  },
  setup() {
    return {
      navigation
    };
  },
  data() {
    return {
      SKUs: [
        { productName: 'T-Shirt', skuName: 'T-Shirt, Red', SKU: 'T-SHRT_RD' },
        { productName: 'T-Shirt', skuName: 'T-Shirt, Blue', SKU: 'T-SHRT_BLU' }
      ]
    };
  },
  methods: {
    async getSKUs({ webflowSiteId, webflowAPIKey }) {
      const res = await fetch('/api/generate-skus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          webflowSiteId: webflowSiteId,
          webflowAPIKey: webflowAPIKey
        })
      });

      const SKUs = await res.json();
      this.SKUs = [...SKUs];
    },
    exportCSV() {
      const data = [...this.SKUs];
      const fileName = 'download';
      const exportType = exportFromJSON.types.csv;
      exportFromJSON({ data, fileName, exportType });
    }
  }
};
</script>
