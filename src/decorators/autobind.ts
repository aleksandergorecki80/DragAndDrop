// Autobind decorator
export function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const orygianlMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = orygianlMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
