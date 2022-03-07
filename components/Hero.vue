<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-8">
    <div
      class="px-4 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-start"
    >
      <div>
        <h1
          class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
        >
          <span class="md:block">Auto Generated Webflow E-commerce SKUs</span>
        </h1>
        <p
          class="mt-3 text-base text-zinc-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
        >
          A free resource to quickly generate well designed SKUs for all of your
          Webflow E-commerce products.
        </p>
      </div>
    </div>
    <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 text-zinc-800">
      <div
        class="bg-white sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
      >
        <div class="px-4 py-8 sm:px-10">
          <div class="mt-6 relative"></div>

          <div class="mt-6">
            <form
              @submit.prevent="submitForm"
              action="#"
              method="POST"
              class="space-y-6"
            >
              <div>
                <label for="webflow-site-id" class="sr-only"
                  >Webflow Site Id</label
                >
                <input
                  v-model.lazy.trim="webflowSiteId"
                  type="password"
                  name="webflow-site-id"
                  id="webflow-site-id"
                  autocomplete="webflow-site-id"
                  placeholder="Webflow Site Id"
                  required="true"
                  class="block w-full shadow-sm focus:outline-none placeholder-zinc-500 focus:border-purple-500 sm:text-sm border-zinc-300 rounded-md"
                />
              </div>

              <div>
                <label for="webflow-api-key" class="sr-only"
                  >Webflow API key</label
                >
                <input
                  v-model.lazy.trim="webflowAPIKey"
                  type="password"
                  name="webflow-api-key"
                  id="webflow-api-key"
                  placeholder="Webflow API Key"
                  required="true"
                  class="block w-full shadow-sm focus:outline-none placeholder-zinc-500 focus:border-purple-500 sm:text-sm border-zinc-300 rounded-md"
                />
              </div>

              <div>
                <button
                  @click="submit"
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#9061f9] hover:bg-violet-700 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                >
                  Generate SKUs
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      webflowSiteId: '',
      webflowAPIKey: ''
    };
  },
  methods: {
    async submitForm() {
      this.$emit('get-SKUs', {
        webflowSiteId: this.webflowSiteId,
        webflowAPIKey: this.webflowAPIKey
      });
    }
  }
};
</script>
