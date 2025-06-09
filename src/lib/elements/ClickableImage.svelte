<script>
  import { dev } from "$app/environment";
  import AreaButton from "$lib/elements/AreaButton.svelte";
  import { shoot } from "$lib/player.js";
</script>

<!-- generated in https://www.fla-shop.com/image-map/ -->
<div class="relative flex aspect-video h-full max-h-[720px] w-full max-w-[1280px] items-center justify-center">
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <svg
    style="width:100%"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1280 720"
    class="bells border-4 border-double border-stone-400"
    class:debug={dev}
    onclick={shoot}
  >
    <image xlink:href="bells.png"></image>
    <AreaButton>
      <g>
        <polygon
          class="image-mapper-shape"
          data-index="1"
          points="326.99,359.81 342.792,348.87 365.888,352.517 375.613,367.104 373.181,396.277 385.337,409.649 382.906,427.882 361.026,436.391 336.714,436.391 306.325,421.804 299.031,404.786 305.109,391.415 322.127,382.906"
        ></polygon>
      </g>
    </AreaButton>
    <AreaButton>
      <g>
        <polygon
          class="image-mapper-shape"
          data-index="2"
          points="478.936,345.223 505.679,346.439 517.835,361.026 517.835,392.631 532.422,408.433 532.422,429.098 514.188,442.469 481.368,444.9 447.331,433.96 435.176,416.942 441.254,393.846 458.272,385.337 463.134,354.948"
        ></polygon>
      </g>
    </AreaButton>
    <AreaButton>
      <g>
        <polygon
          class="image-mapper-shape"
          data-index="3"
          points="633.314,450.978 605.356,443.685 587.122,425.451 590.769,399.924 610.218,387.768 611.434,351.301 627.236,339.145 657.626,339.145 672.213,351.301 678.291,388.984 696.524,407.217 697.74,429.098 681.937,444.9 658.841,450.978"
        ></polygon>
      </g>
    </AreaButton>
    <AreaButton>
      <g>
        <polygon
          class="image-mapper-shape"
          data-index="4"
          points="762.165,351.301 775.537,335.499 807.141,330.636 827.806,344.008 838.746,385.337 856.98,396.277 865.489,418.158 863.058,435.176 843.609,448.547 804.71,460.703 780.399,460.703 753.656,450.978 739.069,435.176 740.285,414.511 757.303,392.631"
        ></polygon>
      </g>
    </AreaButton>
    <AreaButton>
      <g>
        <polygon
          class="image-mapper-shape"
          data-index="5"
          points="933.561,331.852 953.01,325.774 977.322,325.774 991.909,334.283 1011.36,379.259 1036.89,393.846 1047.83,412.08 1049.04,427.882 1030.81,448.547 1002.85,463.134 966.382,469.212 927.483,467.996 903.172,449.763 903.172,420.589 922.621,399.924 918.974,354.948"
        ></polygon>
      </g>
    </AreaButton>
  </svg>
</div>
