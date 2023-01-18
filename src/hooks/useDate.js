import dayjs from 'dayjs'
export const useDate = () => {
  let time = ref(dayjs().unix())
  let timer = null
  onMounted(() => {
    timer = setInterval(() => (time.value += 1), 1000)
  })
  onUnmounted(() => {
    clearInterval(timer)
  })
  const curDate = computed(() => {
    let day = dayjs.unix(time.value)
    return day.format('YYYY/MM/DD')
  })
  const curClock = computed(() => {
    let day = dayjs.unix(time.value)
    return day.format('HH:mm:ss')
  })
  return { curDate, curClock }
}
