<template>
    <div class="date" :class="{checked: checked}" :checked="checked">
        {{title}}
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class DateBlock extends Vue {
  @Prop() private title!: string;
  @Prop() private checked!: boolean;
}
</script>

<style lang="scss" scoped>
@import '../../../style/mixin';
.checked {
    background-color: $green;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 0.05rem;
    @include borderRadius(5%);
    width: 6rem;
    height: 6rem;
    @include font(1rem);
}
</style>