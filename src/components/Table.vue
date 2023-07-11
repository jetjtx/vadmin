<script setup>
const props = defineProps({
    data: Array,
})

const fields = [
    'id', 'Name', 'Contact', 'Email', 'Locations'
]

const lcfields = [];
fields.forEach(e => {
    lcfields.push(e);
})

if (fields[0] == "id") {
    fields[0] = "ID"
}

// const errors = ref(null)
// async function submitForm() {
//     const err = {};
//     err.email = 'Invalid email';

//     if (Object.keys(err).length > 0) {
//         errors = err
//         return
//     } else {
//         errors = null
//     }
// }
</script>

<template>
<table v-show="data != ''" class="w-full bg-gray-800">
    <thead class="text-sm">
        <tr>
            <th class="
                text-[11px]
                text-gray-50
                text-left
                px-5
                py-2.5
                border-b
                border-b-amber-900
                min-w-[5rem]
                bg-slate-800"
            v-for="f in fields" :key="f">
            {{ f }}
            </th>
        </tr>
    </thead>
    <tbody class="text-sm font-light">
        <tr v-for="i in data">
            <td class="px-5 py-2.5 whitespace-nowrap" v-for="f in lcfields">
                {{ i[f] }}
            </td>
        </tr>
    </tbody>
</table>
</template>