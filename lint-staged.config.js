module.exports = {
    '*.(ts|tsx|js|json)': filenames => {
        const formatScript = `yarn format ${filenames.join(' ')}`;
        return [formatScript, 'yarn lint', 'yarn compile', 'git add -A'];
    },
};