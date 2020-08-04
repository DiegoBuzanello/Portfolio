

const projects = [
    {
        id: '0',
        name: 'hiBike',
        url: 'hibike',
        details: {
            name: 'hiBike',
            img: 'https://i.pinimg.com/originals/81/8c/db/818cdba928af4f08692d05457dc3ed7e.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus eros non rutrum tristique. Fusce eget consequat sapien. Etiam ac luctus nisl. Donec quis venenatis orci, eget pulvinar sapien. Ut congue, justo ac dignissim tincidunt, lacus tellus eleifend nulla, id fermentum sapien est quis sem. Duis cursus lorem bibendum, lacinia nibh in, eleifend ex. Curabitur ac arcu at leo feugiat rutrum. In pellentesque tristique mollis. Nullam consequat rhoncus imperdiet. Morbi non luctus ante, vitae efficitur erat. Integer ac est nec dui pellentesque gravida. Suspendisse maximus tincidunt velit. Aenean quis magna rhoncus, dapibus mauris sed, dapibus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate sapien lacus, rutrum ullamcorper ligula pellentesque ac. Donec a purus vehicula, rutrum augue eu, iaculis nunc.',
            technologies: [
                {
                    name: 'Programming',
                    tecs: ['bootstrap.svg'],
                },
                {
                    name: 'Design',
                    tecs: ['photoshop.svg'],
                },
                {
                    name: 'OS',
                    tecs: ['windows.svg'],
                },
            ],
            info: [
                {
                    name: 'Site',
                    url: 'http://www.hibike.com.br'
                },
                {
                    name: 'App',
                    url: 'http://www.hibike.com.br'
                },
            ]
        },
    },
    {
        id: '1',
        name: 'PunkPaulista',
        url: 'punkpaulista',
        details: {
            name: 'hiBike',
            img: 'https://rockcontent.com/wp-content/uploads/2017/07/o-que-e-design-1280x720.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus eros non rutrum tristique. Fusce eget consequat sapien. Etiam ac luctus nisl. Donec quis venenatis orci, eget pulvinar sapien. Ut congue, justo ac dignissim tincidunt, lacus tellus eleifend nulla, id fermentum sapien est quis sem. Duis cursus lorem bibendum, lacinia nibh in, eleifend ex. Curabitur ac arcu at leo feugiat rutrum. In pellentesque tristique mollis. Nullam consequat rhoncus imperdiet. Morbi non luctus ante, vitae efficitur erat. Integer ac est nec dui pellentesque gravida. Suspendisse maximus tincidunt velit. Aenean quis magna rhoncus, dapibus mauris sed, dapibus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate sapien lacus, rutrum ullamcorper ligula pellentesque ac. Donec a purus vehicula, rutrum augue eu, iaculis nunc.',
            technologies: [
                {
                    name: 'Programming',
                    tecs: ['bootstrap.svg'],
                },
                {
                    name: 'Design',
                    tecs: ['photoshop.svg'],
                },
                {
                    name: 'OS',
                    tecs: ['windows.svg'],
                },
            ],
            info: [
                {
                    name: 'Site',
                    url: 'http://www.hibike.com.br'
                },
                {
                    name: 'App',
                    url: 'http://www.hibike.com.br'
                },
            ]
        },
    },
    {
        id: '2',
        name: 'Plano B',
        url: 'planob',
        details: {
            name: 'hiBike',
            img: 'https://knoow.net/wp-content/uploads/2016/04/presentation.design.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus eros non rutrum tristique. Fusce eget consequat sapien. Etiam ac luctus nisl. Donec quis venenatis orci, eget pulvinar sapien. Ut congue, justo ac dignissim tincidunt, lacus tellus eleifend nulla, id fermentum sapien est quis sem. Duis cursus lorem bibendum, lacinia nibh in, eleifend ex. Curabitur ac arcu at leo feugiat rutrum. In pellentesque tristique mollis. Nullam consequat rhoncus imperdiet. Morbi non luctus ante, vitae efficitur erat. Integer ac est nec dui pellentesque gravida. Suspendisse maximus tincidunt velit. Aenean quis magna rhoncus, dapibus mauris sed, dapibus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate sapien lacus, rutrum ullamcorper ligula pellentesque ac. Donec a purus vehicula, rutrum augue eu, iaculis nunc.',
            technologies: [
                {
                    name: 'Programming',
                    tecs: ['bootstrap.svg'],
                },
                {
                    name: 'Design',
                    tecs: ['photoshop.svg'],
                },
                {
                    name: 'OS',
                    tecs: ['windows.svg'],
                },
            ],
            info: [
                {
                    name: 'Site',
                    url: 'http://www.hibike.com.br'
                },
                {
                    name: 'App',
                    url: 'http://www.hibike.com.br'
                },
            ]
        },
    },
    {
        id: '3',
        name: 'SaveAdd',
        url: 'saveadd',
        details: {
            name: 'hiBike',
            img: 'data:image/jpeg;base64,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',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus eros non rutrum tristique. Fusce eget consequat sapien. Etiam ac luctus nisl. Donec quis venenatis orci, eget pulvinar sapien. Ut congue, justo ac dignissim tincidunt, lacus tellus eleifend nulla, id fermentum sapien est quis sem. Duis cursus lorem bibendum, lacinia nibh in, eleifend ex. Curabitur ac arcu at leo feugiat rutrum. In pellentesque tristique mollis. Nullam consequat rhoncus imperdiet. Morbi non luctus ante, vitae efficitur erat. Integer ac est nec dui pellentesque gravida. Suspendisse maximus tincidunt velit. Aenean quis magna rhoncus, dapibus mauris sed, dapibus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate sapien lacus, rutrum ullamcorper ligula pellentesque ac. Donec a purus vehicula, rutrum augue eu, iaculis nunc.',
            technologies: [
                {
                    name: 'Programming',
                    tecs: ['bootstrap.svg'],
                },
                {
                    name: 'Design',
                    tecs: ['photoshop.svg'],
                },
                {
                    name: 'OS',
                    tecs: ['windows.svg'],
                },
            ],
            info: [
                {
                    name: 'Site',
                    url: 'http://www.hibike.com.br'
                },
                {
                    name: 'App',
                    url: 'http://www.hibike.com.br'
                },
            ]
        },
    },
];

export default projects;