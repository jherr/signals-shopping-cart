<script>
import { discount } from "../global-signals";
import { effect } from "../effect";

function moarDiscount() {
  discount.set(discount.get() + 0.1);
}

function lessDiscount() {
  discount.set(discount.get() - 0.1);
}

let discountValue = discount.get();
effect(() => {
  discountValue = discount.get();
});
</script>

<h1 class="text-3xl font-bold mb-10">Svelte Discounter</h1>
<div class="mb-5">
  Discount: {(discountValue * 100.0).toFixed(0)}%
</div>

<div class="flex gap-3">
  <button
    on:click={lessDiscount}
    class="px-4 py-2 bg-red-500 text-white rounded-full"
  >
    LESS Discount!
  </button>
  <button
    on:click={moarDiscount}
    class="px-4 py-2 bg-green-500 text-white rounded-full"
  >
    Moar Discount!
  </button>  
</div>

