declare module '*.vue' {
  import { App, defineComponent } from 'vue';
  const componentOptions: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default componentOptions;
}
