<template>
    <div class="fixed flex self-center justify-center w-full">
      <div class="fixed inset-0 bg- opacity-50 bg-zinc-600" aria-hidden="true"></div>
      <div class="z-10 border rounded-md border-zinc-500 grid w-full max-w-sm px-5 py-4 text-zinc-200 bg-zinc-800"
      aria-modal="true"
      aria-labelledby="asc-model-header"
      aria-describedby="asc-model-body"
      tabindex="-1"
      role="alertdialog">
        <h2 id="asc-model-header" class="font-semibold text-lg mb-3">Confirm?</h2>
        <p id="asc-model-body">You have unsave change.</p>
        <div class="flex justify-end gap-2 mt-6">
          <button class="px-4 py-1.5 bg-zinc-700 rounded" type="button">Ok</button>
          <button class="px-4 py-1.5 bg-zinc-700 rounded" type="button">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  