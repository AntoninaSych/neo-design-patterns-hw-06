
export function withTimestamp(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value;
  descriptor.value = function (message: string) {
    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
    return originalMethod.call(this, `[${timestamp}] ${message}`);
  };
}


export function uppercase(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value;
  descriptor.value = function (message: string) {
    return originalMethod.call(this, message.toUpperCase());
  };
}
