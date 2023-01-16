<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width + 'px'" :height="height + 'px'" viewBox="0 0 48 48">
    <g fill="none">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
      ></path>
      <path d="M31 7v17V7Z" clipRule="evenodd"></path>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M31 7v17"></path>
      <path d="m16.636 6.636l14.142 14.142L16.636 6.636Z" clipRule="evenodd"></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="m16.636 6.636l14.142 14.142"
      ></path>
      <path d="M7 17h17H7Z" clipRule="evenodd"></path>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M7 17h17"></path>
      <path d="M20.364 17.636L6.222 31.778l14.142-14.142Z" clipRule="evenodd"></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M20.364 17.636L6.222 31.778"
      ></path>
      <path d="M17 25v17v-17Z" clipRule="evenodd"></path>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 25v17"></path>
      <path d="m17.636 27.636l14.142 14.142l-14.142-14.142Z" clipRule="evenodd"></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="m17.636 27.636l14.142 14.142"
      ></path>
      <path d="M24 31h18h-18Z" clipRule="evenodd"></path>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M24 31h18"></path>
      <path d="M42.364 16.636L28.222 30.778l14.142-14.142Z" clipRule="evenodd"></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M42.364 16.636L28.222 30.778M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"
      ></path>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'iconsFriendscircle',
  props: {
    width: {
      type: [String, Number],
      default: '25',
    },
    height: {
      type: [String, Number],
      default: '25',
    },
  },
}
</script>
