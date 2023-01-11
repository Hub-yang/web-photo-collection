export function sayHello() {
  ElNotification.success({
    title: 'Success',
    message: 'Hello,world!',
    duration: 5000,
  })
}
