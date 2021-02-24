import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.key().map(requireContext)

const req = require.context('@/static/svg', true, /\.svg$/)

requireAll(req)