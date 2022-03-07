<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="mx-auto mt-8 sm:mt-16">
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-zinc-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-zinc-200">
              <thead class="bg-zinc-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider"
                  >
                    SKU name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider"
                  >
                    SKU
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(sku, skuIdx) in SKUs.slice(0, 9)"
                  :key="sku.skuIdx"
                  :class="skuIdx % 2 === 0 ? 'bg-white' : 'bg-zinc-50'"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900"
                  >
                    {{ sku.productName }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                    {{ sku.skuName }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                    {{ sku.SKU }}
                  </td>
                </tr>
              </tbody>
            </table>
            <nav
              class="bg-white px-4 py-3 flex items-center justify-between border-t border-zinc-200 sm:px-6"
              aria-label="Pagination"
            >
              <div class="hidden sm:block">
                <p class="text-sm text-zinc-700">
                  Showing
                  {{ ' ' }}
                  <span class="font-medium">1</span>
                  {{ ' ' }}
                  to
                  {{ ' ' }}
                  <span class="font-medium">{{
                    SKUs.length &lt; 11 ? SKUs.length : 10
                  }}</span>
                  {{ ' ' }}
                  of
                  {{ ' ' }}
                  <span class="font-medium">{{ SKUs.length }}</span>
                  {{ ' ' }}
                  results
                </p>
              </div>
              <div class="flex-1 flex justify-between sm:justify-end">
                <!-- <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 border border-zinc-300 text-sm font-medium rounded-md text-zinc-700 bg-white hover:bg-zinc-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  class="mx-3 relative inline-flex items-center px-4 py-2 border border-zinc-300 text-sm font-medium rounded-md text-zinc-700 bg-white hover:bg-zinc-50"
                >
                  Next
                </a> -->
                <a
                  @click="exportCSV"
                  class="relative cursor-pointer inline-flex items-center px-4 py-2 border border-zinc-300 text-sm font-medium rounded-md text-zinc-700 bg-white hover:bg-zinc-50"
                >
                  Export as CSV
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['SKUs'],
  setup() {},
  methods: {
    exportCSV() {
      console.log('clicked export');
      this.$emit('export-CSV');
    }
  }
};
</script>
