<template>
    <transition name="fade">
        <div class="hx-loading-bar" :style="outerStyles" v-show="show">
            <div :class="['hx-loading-bar-inner',innerClasses]" :style="styles"></div>
        </div>
    </transition>
</template>
<style lang="less">
  @import "./custom";
  .hx-loading-bar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: @zindex-loading-bar;

    &-inner {
      transition: width @transition-time linear;

      &-color-primary {
        background-color: @primary-color;
      }

      &-failed-color-error {
        background-color: @error-color;
      }
    }
  }
</style>
<script>

    export default {
        props: {
//            percent: {
//                type: Number,
//                default: 0
//            },
            color: {
                type: String,
                default: 'primary'
            },
            failedColor: {
                type: String,
                default: 'error'
            },
            height: {
                type: Number,
                default: 2
            },
//            status: {
//                type: String,
//                validator (value) {
//                    return oneOf(value, ['success', 'error']);
//                },
//                default: 'success'
//            },
//            show: {
//                type: Boolean,
//                default: false
//            }
        },
        data () {
            return {
                percent: 0,
//                color: 'primary',
//                failedColor: 'error',
//                height: 2,
                status: 'success',
                show: false
            };
        },
        computed: {
            innerClasses () {
                return [
                    'hx-loading-bar-inner',
                    {
                        'hx-loading-bar-inner-color-primary': this.color === 'primary' && this.status === 'success',
                        'hx-loading-bar-inner-failed-color-error': this.failedColor === 'error' && this.status === 'error'
                    }
                ];
            },
            outerStyles () {
                return {
                    height: `${this.height}px`
                };
            },
            styles () {
                let style = {
                    width: `${this.percent}%`,
                    height: `${this.height}px`
                };

                if (this.color !== 'primary' && this.status === 'success') {
                    style.backgroundColor = this.color;
                }

                if (this.failedColor !== 'error' && this.status === 'error') {
                    style.backgroundColor = this.failedColor;
                }

                return style;
            }
        }
    };
</script>
