import React from 'react';
import { TagsInput } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';

function Demo() {
    return (
        <TagsInput
            styles={ {input: {border: '1px solid red'}}}
            label="Press Enter to submit a tag"
            placeholder="Pick tag from list"
            data={['React', 'Angular', 'Svelte']}
        />
    );
}
export default Demo;