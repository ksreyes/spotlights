const nf = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
});

export const formatNumber = (v) => nf.format(v);