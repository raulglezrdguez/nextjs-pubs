const data = {
  hits: [
    {
      created_at: '2022-03-01T12:38:10.000Z',
      title: null,
      url: null,
      author: 'mbg721',
      points: null,
      story_text: null,
      comment_text:
        'My grade-school-level history understanding was that both this and \u0026quot;under God\u0026quot; in the pledge were the results of a misprioritized social reaction to the military threat posed by Russia.',
      num_comments: null,
      story_id: 30490846,
      story_title:
        'How the Pledge of Allegiance Went from Marketing Ploy to Classroom Staple',
      story_url:
        'https://people.howstuffworks.com/culture-traditions/national-traditions/pledge-allegiance.htm',
      parent_id: 30511369,
      created_at_i: 1646138290,
      _tags: ['comment', 'author_mbg721', 'story_30490846'],
      objectID: '30513360',
      _highlightResult: {
        author: { value: 'mbg721', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            'My grade-school-level history understanding was that both this and \u0026quot;under God\u0026quot; in the pledge were the results of a misprioritized social \u003cem\u003ereactio\u003c/em\u003en to the military threat posed by Russia.',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'How the Pledge of Allegiance Went from Marketing Ploy to Classroom Staple',
          matchLevel: 'none',
          matchedWords: [],
        },
        story_url: {
          value:
            'https://people.howstuffworks.com/culture-traditions/national-traditions/pledge-allegiance.htm',
          matchLevel: 'none',
          matchedWords: [],
        },
      },
    },
    {
      created_at: '2022-03-01T12:35:03.000Z',
      title: null,
      url: null,
      author: 'tinganho',
      points: null,
      story_text: null,
      comment_text:
        'I think in the class world this is normally done by writing a service and injecting it on the constructor of the parent class. Since, React doesn\u0026#x27;t have DI built-in, it becomes problematic with the injection. hooks are essentially classes imo.',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30510083,
      created_at_i: 1646138103,
      _tags: ['comment', 'author_tinganho', 'story_30508524'],
      objectID: '30513339',
      _highlightResult: {
        author: { value: 'tinganho', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            "I think in the class world this is normally done by writing a service and injecting it on the constructor of the parent class. Since, \u003cem\u003eReact\u003c/em\u003e doesn't have DI built-in, it becomes problematic with the injection. hooks are essentially classes imo.",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Solid.js feels like what I always wanted \u003cem\u003eReact\u003c/em\u003e to be',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-\u003cem\u003ereact\u003c/em\u003e-to-be/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
      },
    },
    {
      created_at: '2022-03-01T12:34:01.000Z',
      title: null,
      url: null,
      author: 'torginus',
      points: null,
      story_text: null,
      comment_text:
        'Performance, for one. This method can easily avoid allocating an object for every div (since it turns into a method call, not something that needs to return an object), compared to React\u0026#x27;s render() method.\u003cp\u003eAnother scenario outlined in the article of rendering a row of buttons, each with it\u0026#x27;s own click handler, that needs to allocate a lambda for each button every render. Alternatively, using map() and filter() also allocates lambdas and temporary arrays.\u003cp\u003eAll this can be replaced with a simple \u003ci\u003efor\u003c/i\u003e loop like:\u003cp\u003e\u003cpre\u003e\u003ccode\u003e  for (item of items) {\n     if(!item.isClickable)\n         continue;\n     if(button(item.name)){\n         console.log(item.name)\n     }\n  }\n\u003c/code\u003e\u003c/pre\u003e\nCompare this to the React-ish pseudocode:\u003cp\u003e\u003cpre\u003e\u003ccode\u003e  items.filter(item.isClickable).map(item=\u0026gt;\u0026lt;button onClick={()=\u0026gt;console.log(item.name)} \u0026gt;{item.name}\u0026lt;\u0026#x2F;button\u0026gt;)\n\n\u003c/code\u003e\u003c/pre\u003e\nReadibility-wise, it\u0026#x27;s sort of an acquired taste, I\u0026#x27;m not saying it looks better than JSX (but it\u0026#x27;s a hell of a lot readable than \u003ci\u003eReact.createElement\u003c/i\u003e, so some syntactic sugar might be put on top of it).',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30513022,
      created_at_i: 1646138041,
      _tags: ['comment', 'author_torginus', 'story_30508524'],
      objectID: '30513330',
      _highlightResult: {
        author: { value: 'torginus', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            "Performance, for one. This method can easily avoid allocating an object for every div (since it turns into a method call, not something that needs to return an object), compared to \u003cem\u003eReact's\u003c/em\u003e render() method.\u003cp\u003eAnother scenario outlined in the article of rendering a row of buttons, each with it's own click handler, that needs to allocate a lambda for each button every render. Alternatively, using map() and filter() also allocates lambdas and temporary arrays.\u003cp\u003eAll this can be replaced with a simple \u003ci\u003efor\u003c/i\u003e loop like:\u003cp\u003e\u003cpre\u003e\u003ccode\u003e  for (item of items) {\n     if(!item.isClickable)\n         continue;\n     if(button(item.name)){\n         console.log(item.name)\n     }\n  }\n\u003c/code\u003e\u003c/pre\u003e\nCompare this to the React-ish pseudocode:\u003cp\u003e\u003cpre\u003e\u003ccode\u003e  items.filter(item.isClickable).map(item=\u0026gt;\u0026lt;button onClick={()=\u0026gt;console.log(item.name)} \u0026gt;{item.name}\u0026lt;/button\u0026gt;)\n\n\u003c/code\u003e\u003c/pre\u003e\nReadibility-wise, it's sort of an acquired taste, I'm not saying it looks better than JSX (but it's a hell of a lot readable than \u003ci\u003eReact.createElement\u003c/i\u003e, so some syntactic sugar might be put on top of it).",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value: 'Solid.js feels like what I always wanted React to be',
          matchLevel: 'none',
          matchedWords: [],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
          matchLevel: 'none',
          matchedWords: [],
        },
      },
    },
    {
      created_at: '2022-03-01T12:26:44.000Z',
      title: null,
      url: null,
      author: 'brabel',
      points: null,
      story_text: null,
      comment_text:
        'IF I tell you I will kill you if you move, and I have a knife to your throat, I think you should have a pretty clear and well formed belief that I probably mean it.\u003cp\u003eTelling victims of crime to react as you seem to be proposing is completely irresponsible. I come from a country with high crime and we know very, very well that doing that only causes more deaths - it\u0026#x27;s public policy to tell people this as many people, like you, believe they can be brave and fight back. There\u0026#x27;s no heroes. Life is not a movie.\u003cp\u003eTo survive in this world, we all need to take a hit every now and then: as long as we can stand up again later, it is often the only reasonable course of action.\u003cp\u003eI am also revolted, disgusted by your suggestions that people should put their lives on the line even when they have clear indications that it may be the last thing they do. Losing your life is NEVER worth it. Please stop propagating the ideology of being a martyr or a hero as if that was a good thing. It\u0026#x27;s not, it costs real lives in the real world.',
      num_comments: null,
      story_id: 30465654,
      story_title: 'On the removal of Come Back Alive',
      story_url: 'https://blog.patreon.com/on-the-removal-of-come-back-alive',
      parent_id: 30467682,
      created_at_i: 1646137604,
      _tags: ['comment', 'author_brabel', 'story_30465654'],
      objectID: '30513276',
      _highlightResult: {
        author: { value: 'brabel', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            "IF I tell you I will kill you if you move, and I have a knife to your throat, I think you should have a pretty clear and well formed belief that I probably mean it.\u003cp\u003eTelling victims of crime to \u003cem\u003ereact\u003c/em\u003e as you seem to be proposing is completely irresponsible. I come from a country with high crime and we know very, very well that doing that only causes more deaths - it's public policy to tell people this as many people, like you, believe they can be brave and fight back. There's no heroes. Life is not a movie.\u003cp\u003eTo survive in this world, we all need to take a hit every now and then: as long as we can stand up again later, it is often the only reasonable course of action.\u003cp\u003eI am also revolted, disgusted by your suggestions that people should put their lives on the line even when they have clear indications that it may be the last thing they do. Losing your life is NEVER worth it. Please stop propagating the ideology of being a martyr or a hero as if that was a good thing. It's not, it costs real lives in the real world.",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value: 'On the removal of Come Back Alive',
          matchLevel: 'none',
          matchedWords: [],
        },
        story_url: {
          value: 'https://blog.patreon.com/on-the-removal-of-come-back-alive',
          matchLevel: 'none',
          matchedWords: [],
        },
      },
    },
    {
      created_at: '2022-03-01T12:25:53.000Z',
      title: null,
      url: null,
      author: 'deepstack',
      points: null,
      story_text: null,
      comment_text:
        'and Solid JS runs very close native JS speed!  Any one making a Reactive Native Connector for solidjs?  Vue Native was already using that connector. with that, Solid JS will be ultimate isomorphic lib to use.',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30513242,
      created_at_i: 1646137553,
      _tags: ['comment', 'author_deepstack', 'story_30508524'],
      objectID: '30513265',
      _highlightResult: {
        author: { value: 'deepstack', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            'and Solid JS runs very close native JS speed!  Any one making a \u003cem\u003eReactiv\u003c/em\u003ee Native Connector for solidjs?  Vue Native was already using that connector. with that, Solid JS will be ultimate isomorphic lib to use.',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value: 'Solid.js feels like what I always wanted React to be',
          matchLevel: 'none',
          matchedWords: [],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
          matchLevel: 'none',
          matchedWords: [],
        },
      },
    },
    {
      created_at: '2022-03-01T12:22:51.000Z',
      title: null,
      url: null,
      author: 'schwartzworld',
      points: null,
      story_text: null,
      comment_text:
        'I love solidjs, but the similarities to React are the hardest part for me. The semantics are so similar, but the mechanics are the polar opposite.\u003cp\u003eIn react, everything is a function and all your code runs on every render unless you specifically tell it not to. This really encourages a certain style of writing code and provides a lot of guarantees about safety and scope.\u003cp\u003eSolid is literally the polar opposite, your code runs once, and only the parts that you specifically make reactive are reactive. This allows for much finer-grained updates and performance.\u003cp\u003eThe mental models are so different because they are optimized for different things. React allows for developer sanity (cue all the people who worked on one lousy react app telling me that it doesn\u0026#x27;t) and Solid optimizes for speed and simplicity.\u003cp\u003eSolid is very well designed though. One of the features I loved is that Ryan specifically built it to work as possible to vanilla html\u0026#x2F;js so you can copy old stack overflow answers.',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30508524,
      created_at_i: 1646137371,
      _tags: ['comment', 'author_schwartzworld', 'story_30508524'],
      objectID: '30513242',
      _highlightResult: {
        author: {
          value: 'schwartzworld',
          matchLevel: 'none',
          matchedWords: [],
        },
        comment_text: {
          value:
            "I love solidjs, but the similarities to \u003cem\u003eReact\u003c/em\u003e are the hardest part for me. The semantics are so similar, but the mechanics are the polar opposite.\u003cp\u003eIn \u003cem\u003ereact\u003c/em\u003e, everything is a function and all your code runs on every render unless you specifically tell it not to. This really encourages a certain style of writing code and provides a lot of guarantees about safety and scope.\u003cp\u003eSolid is literally the polar opposite, your code runs once, and only the parts that you specifically make \u003cem\u003ereact\u003c/em\u003eive are \u003cem\u003ereact\u003c/em\u003eive. This allows for much finer-grained updates and performance.\u003cp\u003eThe mental models are so different because they are optimized for different things. \u003cem\u003eReact\u003c/em\u003e allows for developer sanity (cue all the people who worked on one lousy \u003cem\u003ereact\u003c/em\u003e app telling me that it doesn't) and Solid optimizes for speed and simplicity.\u003cp\u003eSolid is very well designed though. One of the features I loved is that Ryan specifically built it to work as possible to vanilla html/js so you can copy old stack overflow answers.",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Solid.js feels like what I always wanted \u003cem\u003eReact\u003c/em\u003e to be',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-\u003cem\u003ereact\u003c/em\u003e-to-be/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
      },
    },
    {
      created_at: '2022-03-01T12:18:37.000Z',
      title: null,
      url: null,
      author: 'parhamn',
      points: null,
      story_text: null,
      comment_text:
        'If theres one React recommendation I\u0026#x27;d make is: use Mobx.',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30508524,
      created_at_i: 1646137117,
      _tags: ['comment', 'author_parhamn', 'story_30508524'],
      objectID: '30513211',
      _highlightResult: {
        author: { value: 'parhamn', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            "If theres one \u003cem\u003eReact\u003c/em\u003e recommendation I'd make is: use Mobx.",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Solid.js feels like what I always wanted \u003cem\u003eReact\u003c/em\u003e to be',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-\u003cem\u003ereact\u003c/em\u003e-to-be/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
      },
    },
    {
      created_at: '2022-03-01T12:15:20.000Z',
      title: null,
      url: null,
      author: 'prohobo',
      points: null,
      story_text: null,
      comment_text:
        'I\u0026#x27;m proficient with React hooks and functional components, but I will never bullshit anyone by pretending that they make any kind of intuitive sense.\u003cp\u003eClasses may have been more \u0026quot;code\u0026quot; but were clear to understand. I don\u0026#x27;t dispute that functional components are probably more efficient though.\u003cp\u003eAnyways, I\u0026#x27;ve never had this problem with React hooks. I\u0026#x27;ve been building complex dynamic UIs for years, and maybe I\u0026#x27;ve grown to get around these kinds of things, but it seems like Solid.js is solving a niche problem at the cost of making hooks even less understandable?',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30508524,
      created_at_i: 1646136920,
      _tags: ['comment', 'author_prohobo', 'story_30508524'],
      objectID: '30513194',
      _highlightResult: {
        author: { value: 'prohobo', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            "I'm proficient with \u003cem\u003eReact\u003c/em\u003e hooks and functional components, but I will never bullshit anyone by pretending that they make any kind of intuitive sense.\u003cp\u003eClasses may have been more \u0026quot;code\u0026quot; but were clear to understand. I don't dispute that functional components are probably more efficient though.\u003cp\u003eAnyways, I've never had this problem with \u003cem\u003eReact\u003c/em\u003e hooks. I've been building complex dynamic UIs for years, and maybe I've grown to get around these kinds of things, but it seems like Solid.js is solving a niche problem at the cost of making hooks even less understandable?",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Solid.js feels like what I always wanted \u003cem\u003eReact\u003c/em\u003e to be',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-\u003cem\u003ereact\u003c/em\u003e-to-be/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
      },
    },
    {
      created_at: '2022-03-01T12:12:14.000Z',
      title: null,
      url: null,
      author: 'tambourine_man',
      points: null,
      story_text: null,
      comment_text:
        '\u0026gt;…much like traditional templating languages, we get a construct like \u0026lt;For\u0026gt; that reinvents a concept that\u0026#x27;s already in the language.\u003cp\u003eI\u0026#x27;m right there with you, but when React invents a whole markup language inside of JavaScript, it\u0026#x27;s not in much of a standing to make purity criticisms.',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30509770,
      created_at_i: 1646136734,
      _tags: ['comment', 'author_tambourine_man', 'story_30508524'],
      objectID: '30513171',
      _highlightResult: {
        author: {
          value: 'tambourine_man',
          matchLevel: 'none',
          matchedWords: [],
        },
        comment_text: {
          value:
            "\u0026gt;…much like traditional templating languages, we get a construct like \u0026lt;For\u0026gt; that reinvents a concept that's already in the language.\u003cp\u003eI'm right there with you, but when \u003cem\u003eReact\u003c/em\u003e invents a whole markup language inside of JavaScript, it's not in much of a standing to make purity criticisms.",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Solid.js feels like what I always wanted \u003cem\u003eReact\u003c/em\u003e to be',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-\u003cem\u003ereact\u003c/em\u003e-to-be/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
      },
    },
    {
      created_at: '2022-03-01T12:06:47.000Z',
      title: null,
      url: null,
      author: 'shrew',
      points: null,
      story_text: null,
      comment_text:
        '\u0026gt; Because you sometimes want to filter, sort or project your data.\u003cp\u003eThe idea that this type of thing should be happening anywhere near the view rendering loop is the exact reason I\u0026#x27;ve not had a great time picking up React codebases.\u003cp\u003eBy the time you\u0026#x27;re rendering data into markup, the data should be in the exact state you need it. No further filtering or data mangling or sorting. That type of data manipulation should happen at the point of data change and then it shouldn\u0026#x27;t happen again until the data changes again.\u003cp\u003eThe simplistic templating languages in Vue\u0026#x2F;Svelte\u0026#x2F;Alpine\u0026#x2F;whatever-comes-next force you to pull your data manipulation back to somewhere more appropriate, with Vue even throwing a warning if you try to filter within v-for construct.\u003cp\u003eBecause React is JS, people are let loose to do wildly inefficient operations and do them over and over and over whenever _anything_ in that component changes.',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30512151,
      created_at_i: 1646136407,
      _tags: ['comment', 'author_shrew', 'story_30508524'],
      objectID: '30513136',
      _highlightResult: {
        author: { value: 'shrew', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            "\u0026gt; Because you sometimes want to filter, sort or project your data.\u003cp\u003eThe idea that this type of thing should be happening anywhere near the view rendering loop is the exact reason I've not had a great time picking up \u003cem\u003eReact\u003c/em\u003e codebases.\u003cp\u003eBy the time you're rendering data into markup, the data should be in the exact state you need it. No further filtering or data mangling or sorting. That type of data manipulation should happen at the point of data change and then it shouldn't happen again until the data changes again.\u003cp\u003eThe simplistic templating languages in Vue/Svelte/Alpine/whatever-comes-next force you to pull your data manipulation back to somewhere more appropriate, with Vue even throwing a warning if you try to filter within v-for construct.\u003cp\u003eBecause \u003cem\u003eReact\u003c/em\u003e is JS, people are let loose to do wildly inefficient operations and do them over and over and over whenever _anything_ in that component changes.",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Solid.js feels like what I always wanted \u003cem\u003eReact\u003c/em\u003e to be',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-\u003cem\u003ereact\u003c/em\u003e-to-be/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
      },
    },
    {
      created_at: '2022-03-01T12:03:39.000Z',
      title: null,
      url: null,
      author: 'audunw',
      points: null,
      story_text: null,
      comment_text:
        '\u0026gt; thanks to an ill thought out denuclearization drive\u003cp\u003eIt has nothing to do with this. Keeping nuclear power around would help a bit when it comes to electricity in particular, but natural gas is also used for heating and industry, where nuclear power just isn\u0026#x27;t a direct replacement.\u003cp\u003eSince most reactors are old, and would need expensive refurbishment to continue using them. It wasn\u0026#x27;t so much a choice between not denuclearizing and using gas. It was between a huge and expensive investment in mostly new nuclear capacity, vs a combination of new renewable energy and inexpensive natural gas. Since natural gas is easier to combine with renewables, and easier to gradually phase out as renewables became more mature, there was some rationality behind the decision.\u003cp\u003eMaximizing investments in renewables is probably the most important thing to do, because it\u0026#x27;s easier and faster to scale, and easier to get started with in developing countries which will be so important to avoiding increased emissions, so getting the costs down on those has huge benefits.\u003cp\u003eThat said, yes, it was dumb making Europe dependent on Russian gas. I guess there was some hope that this would keep Russia in check through economic ties, but this has now obviously been proven wrong.',
      num_comments: null,
      story_id: 30467919,
      story_title:
        'Why the West is reluctant to deny Russian banks access to SWIFT',
      story_url:
        'https://www.economist.com/the-economist-explains/2022/02/25/why-the-west-is-reluctant-to-deny-russian-banks-access-to-swift',
      parent_id: 30468496,
      created_at_i: 1646136219,
      _tags: ['comment', 'author_audunw', 'story_30467919'],
      objectID: '30513107',
      _highlightResult: {
        author: { value: 'audunw', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            "\u0026gt; thanks to an ill thought out denuclearization drive\u003cp\u003eIt has nothing to do with this. Keeping nuclear power around would help a bit when it comes to electricity in particular, but natural gas is also used for heating and industry, where nuclear power just isn't a direct replacement.\u003cp\u003eSince most \u003cem\u003ereactors\u003c/em\u003e are old, and would need expensive refurbishment to continue using them. It wasn't so much a choice between not denuclearizing and using gas. It was between a huge and expensive investment in mostly new nuclear capacity, vs a combination of new renewable energy and inexpensive natural gas. Since natural gas is easier to combine with renewables, and easier to gradually phase out as renewables became more mature, there was some rationality behind the decision.\u003cp\u003eMaximizing investments in renewables is probably the most important thing to do, because it's easier and faster to scale, and easier to get started with in developing countries which will be so important to avoiding increased emissions, so getting the costs down on those has huge benefits.\u003cp\u003eThat said, yes, it was dumb making Europe dependent on Russian gas. I guess there was some hope that this would keep Russia in check through economic ties, but this has now obviously been proven wrong.",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Why the West is reluctant to deny Russian banks access to SWIFT',
          matchLevel: 'none',
          matchedWords: [],
        },
        story_url: {
          value:
            'https://www.economist.com/the-economist-explains/2022/02/25/why-the-west-is-reluctant-to-deny-russian-banks-access-to-swift',
          matchLevel: 'none',
          matchedWords: [],
        },
      },
    },
    {
      created_at: '2022-03-01T12:03:07.000Z',
      title: null,
      url: null,
      author: 'apatheticonion',
      points: null,
      story_text: null,
      comment_text:
        'After working with React for years it is something I would not recommend and can only think of limited use cases to use.\u003cp\u003eYou can write really performant software in React, but ergonomic (beyond stockholm syndrome) I would not call it.\u003cp\u003eIt\u0026#x27;s also difficult to implement quality software engineering principles in a React application such that an application is maintainable, glacable and easy for someone new to a project to pick up.\u003cp\u003eThe flexibility in its toolchain is nice, however',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30510578,
      created_at_i: 1646136187,
      _tags: ['comment', 'author_apatheticonion', 'story_30508524'],
      objectID: '30513105',
      _highlightResult: {
        author: {
          value: 'apatheticonion',
          matchLevel: 'none',
          matchedWords: [],
        },
        comment_text: {
          value:
            "After working with \u003cem\u003eReact\u003c/em\u003e for years it is something I would not recommend and can only think of limited use cases to use.\u003cp\u003eYou can write really performant software in \u003cem\u003eReact\u003c/em\u003e, but ergonomic (beyond stockholm syndrome) I would not call it.\u003cp\u003eIt's also difficult to implement quality software engineering principles in a \u003cem\u003eReact\u003c/em\u003e application such that an application is maintainable, glacable and easy for someone new to a project to pick up.\u003cp\u003eThe flexibility in its toolchain is nice, however",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Solid.js feels like what I always wanted \u003cem\u003eReact\u003c/em\u003e to be',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-\u003cem\u003ereact\u003c/em\u003e-to-be/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
      },
    },
    {
      created_at: '2022-03-01T11:58:15.000Z',
      title: null,
      url: null,
      author: 'ihateolives',
      points: null,
      story_text: null,
      comment_text:
        'I know, I\u0026#x27;ve read it. I\u0026#x27;m still not convinced. React could just as well generate and insert missing key on build instead of asking me to do this:\u003cp\u003e\u003ci\u003e... you can add a new ID property to your model or hash some parts of the content to generate a key.\u003c/i\u003e\u003cp\u003eIt is just plain wrong to ask me to change my data model because of this. This is part of the housekeeping that I expect the framework -- pardon, library -- to take care of for me.',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30511810,
      created_at_i: 1646135895,
      _tags: ['comment', 'author_ihateolives', 'story_30508524'],
      objectID: '30513060',
      _highlightResult: {
        author: { value: 'ihateolives', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            "I know, I've read it. I'm still not convinced. \u003cem\u003eReact\u003c/em\u003e could just as well generate and insert missing key on build instead of asking me to do this:\u003cp\u003e\u003ci\u003e... you can add a new ID property to your model or hash some parts of the content to generate a key.\u003c/i\u003e\u003cp\u003eIt is just plain wrong to ask me to change my data model because of this. This is part of the housekeeping that I expect the framework -- pardon, library -- to take care of for me.",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Solid.js feels like what I always wanted \u003cem\u003eReact\u003c/em\u003e to be',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-\u003cem\u003ereact\u003c/em\u003e-to-be/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
      },
    },
    {
      created_at: '2022-03-01T11:50:43.000Z',
      title: null,
      url: null,
      author: 'leonardopainter',
      points: null,
      story_text: null,
      comment_text:
        'My library (see other comments) has components that are about half the amount of code as react or solid and in pure javascript. The javascript shows exactly was is happening, as opposed to the \u0026quot;simplicity\u0026quot; of react that shows a pretend version of what is going on, then 5 years later people discover that is a bit of a problem and now we are onto the next library (solid?).\u003cp\u003eI wonder if I could have your opinion on my library, and why half the code, native performance is actually more complicated in the long-run. I don\u0026#x27;t know the answer at the moment. Documentation isn\u0026#x27;t complete... it is just web components. eg hello world just becomes a function like const component = hello(\u0026#x27;Andrew\u0026#x27;); document.body.append(component); in the example on github. Anyway, the todo shows a more typical real world example I guess.',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30510238,
      created_at_i: 1646135443,
      _tags: ['comment', 'author_leonardopainter', 'story_30508524'],
      objectID: '30513009',
      _highlightResult: {
        author: {
          value: 'leonardopainter',
          matchLevel: 'none',
          matchedWords: [],
        },
        comment_text: {
          value:
            "My library (see other comments) has components that are about half the amount of code as \u003cem\u003ereact\u003c/em\u003e or solid and in pure javascript. The javascript shows exactly was is happening, as opposed to the \u0026quot;simplicity\u0026quot; of \u003cem\u003ereact\u003c/em\u003e that shows a pretend version of what is going on, then 5 years later people discover that is a bit of a problem and now we are onto the next library (solid?).\u003cp\u003eI wonder if I could have your opinion on my library, and why half the code, native performance is actually more complicated in the long-run. I don't know the answer at the moment. Documentation isn't complete... it is just web components. eg hello world just becomes a function like const component = hello('Andrew'); document.body.append(component); in the example on github. Anyway, the todo shows a more typical real world example I guess.",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Solid.js feels like what I always wanted \u003cem\u003eReact\u003c/em\u003e to be',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-\u003cem\u003ereact\u003c/em\u003e-to-be/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
      },
    },
    {
      created_at: '2022-03-01T11:44:16.000Z',
      title: null,
      url: null,
      author: 'riemannzeta',
      points: null,
      story_text: null,
      comment_text:
        'Actually, one of the fascinating facts about the history of PCR is that Kary Mullis didn\u0026#x27;t optimize to make billions on the patent rights. In his Nobel acceptance speech, he reminisces about how a coworker told him to quit his job and start another company before submitting an invention disclosure on PCR, but he didn\u0026#x27;t do that.\u003cp\u003e\u003ca href="https:\u0026#x2F;\u0026#x2F;www.nobelprize.org\u0026#x2F;prizes\u0026#x2F;chemistry\u0026#x2F;1993\u0026#x2F;mullis\u0026#x2F;lecture\u0026#x2F;" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;www.nobelprize.org\u0026#x2F;prizes\u0026#x2F;chemistry\u0026#x2F;1993\u0026#x2F;mullis\u0026#x2F;lect...\u003c/a\u003e\u003cp\u003eMy friend Ron Cook, who had founded Biosearch, and produced the first successful commercial DNA synthesis machine, was the only person I remember during that summer who shared my enthusiasm for the reaction. He knew it would be good for the oligonucleotide business. Maybe that’s why he believed it. Or maybe he’s a rational chemist with an intact brain. He’s one of my best friends now, so I have to disqualify myself from claiming any really objective judgement regarding him. Perhaps I should have followed his advice, but then things would have worked out differently and I probably wouldn’t be here on the beach in La Jolla writing this, which I enjoy. Maybe I would be rich in Tahiti. He suggested one night at his house that since no one at Cetus had taken it seriously, I should resign my job, wait a little while, make it work, write a patent, and get rich.',
      num_comments: null,
      story_id: 30507799,
      story_title:
        'US PTO rules against Univ of California, argues that Broad Inst invented CRISPR',
      story_url:
        'https://www.scribd.com/document/561762623/106-115-Decision-on-Priority',
      parent_id: 30509106,
      created_at_i: 1646135056,
      _tags: ['comment', 'author_riemannzeta', 'story_30507799'],
      objectID: '30512951',
      _highlightResult: {
        author: { value: 'riemannzeta', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            'Actually, one of the fascinating facts about the history of PCR is that Kary Mullis didn\'t optimize to make billions on the patent rights. In his Nobel acceptance speech, he reminisces about how a coworker told him to quit his job and start another company before submitting an invention disclosure on PCR, but he didn\'t do that.\u003cp\u003e\u003ca href="https://www.nobelprize.org/prizes/chemistry/1993/mullis/lecture/" rel="nofollow"\u003ehttps://www.nobelprize.org/prizes/chemistry/1993/mullis/lect...\u003c/a\u003e\u003cp\u003eMy friend Ron Cook, who had founded Biosearch, and produced the first successful commercial DNA synthesis machine, was the only person I remember during that summer who shared my enthusiasm for the \u003cem\u003ereactio\u003c/em\u003en. He knew it would be good for the oligonucleotide business. Maybe that’s why he believed it. Or maybe he’s a rational chemist with an intact brain. He’s one of my best friends now, so I have to disqualify myself from claiming any really objective judgement regarding him. Perhaps I should have followed his advice, but then things would have worked out differently and I probably wouldn’t be here on the beach in La Jolla writing this, which I enjoy. Maybe I would be rich in Tahiti. He suggested one night at his house that since no one at Cetus had taken it seriously, I should resign my job, wait a little while, make it work, write a patent, and get rich.',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'US PTO rules against Univ of California, argues that Broad Inst invented CRISPR',
          matchLevel: 'none',
          matchedWords: [],
        },
        story_url: {
          value:
            'https://www.scribd.com/document/561762623/106-115-Decision-on-Priority',
          matchLevel: 'none',
          matchedWords: [],
        },
      },
    },
    {
      created_at: '2022-03-01T11:42:37.000Z',
      title: null,
      url: null,
      author: 'hsn915',
      points: null,
      story_text: null,
      comment_text:
        'As far as I could tell, around that time (and even now to some extent) the amount of activity on StackOverflow is used to measure the popularity of a project.\u003cp\u003eAngular had a \u0026quot;made by google\u0026quot; kind of logo on its website, indicating to many people that it\u0026#x27;s of high quality and worth adopting.\u003cp\u003eBut Angular was also so convoluted and had so many problems that so many people kept running into random problems all the time and had to ask questions about them on SO. This signals (incorrectly) that Angular is popular, driving more people to believe it\u0026#x27;s worthwhile to adopt it.\u003cp\u003eKnockout had neither. It was not sponsored by a corporation. And it was so good that you hardly ever run into random problems.\u003cp\u003eUltimately it was eclipsed by React and Typescript because lack of type checking for the html templates means it\u0026#x27;s hard to scale it will to large projects.',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30510182,
      created_at_i: 1646134957,
      _tags: ['comment', 'author_hsn915', 'story_30508524'],
      objectID: '30512939',
      _highlightResult: {
        author: { value: 'hsn915', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            "As far as I could tell, around that time (and even now to some extent) the amount of activity on StackOverflow is used to measure the popularity of a project.\u003cp\u003eAngular had a \u0026quot;made by google\u0026quot; kind of logo on its website, indicating to many people that it's of high quality and worth adopting.\u003cp\u003eBut Angular was also so convoluted and had so many problems that so many people kept running into random problems all the time and had to ask questions about them on SO. This signals (incorrectly) that Angular is popular, driving more people to believe it's worthwhile to adopt it.\u003cp\u003eKnockout had neither. It was not sponsored by a corporation. And it was so good that you hardly ever run into random problems.\u003cp\u003eUltimately it was eclipsed by \u003cem\u003eReact\u003c/em\u003e and Typescript because lack of type checking for the html templates means it's hard to scale it will to large projects.",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Solid.js feels like what I always wanted \u003cem\u003eReact\u003c/em\u003e to be',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-\u003cem\u003ereact\u003c/em\u003e-to-be/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
      },
    },
    {
      created_at: '2022-03-01T11:41:30.000Z',
      title: null,
      url: null,
      author: 'TekMol',
      points: null,
      story_text: null,
      comment_text: 'True.\u003cp\u003eBut the same issue with reacts way.',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30512857,
      created_at_i: 1646134890,
      _tags: ['comment', 'author_TekMol', 'story_30508524'],
      objectID: '30512930',
      _highlightResult: {
        author: { value: 'TekMol', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            'True.\u003cp\u003eBut the same issue with \u003cem\u003ereacts\u003c/em\u003e way.',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value: 'Solid.js feels like what I always wanted React to be',
          matchLevel: 'none',
          matchedWords: [],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
          matchLevel: 'none',
          matchedWords: [],
        },
      },
    },
    {
      created_at: '2022-03-01T11:41:08.000Z',
      title: null,
      url: null,
      author: 'nonrandomstring',
      points: null,
      story_text: null,
      comment_text:
        'Time has plenty to do with it.\u003cp\u003e\u0026gt; more sophisticated cognitive abilities than previously known\u003cp\u003eNo. More sophisticated cognitive abilities than previously modelled\nusing atemporal neural nets.\u003cp\u003eAnyone who has spent an afternoon being outwitted by a fly in their\nstudy knows that even a common housefly can be cunning beyond belief.\nIt\u0026#x27;s not just that their reaction times out-pace humans. They seem to\nremember, anticipate, plan and even deceive.\u003cp\u003eThose faculties seem inexplicable by a bottom-up network of 100,000\nneurons using naive connectionist models we currently understand in\nartificial networks. That\u0026#x27;s because time is missing from the\nmodels. Biological networks are spiking, and (last I researched it)\ncan operate at up to 1kHz, and using integration, differentiation and\nnon-linear feedback can work like analogue computers (Hodgkin and\nIzhikevich models). Instead of sending simple activation thresholds\naround the network that\u0026#x27;s like sending network packets that can\nperform remote procedure calls.\u003cp\u003eAnd yes, they love bananas.',
      num_comments: null,
      story_id: 30500052,
      story_title:
        'Flies possess more sophisticated cognitive abilities than previously known',
      story_url:
        'https://ucsdnews.ucsd.edu/pressrelease/flies-possess-more-sophisticated-cognitive-abilities-than-previously-known',
      parent_id: 30512562,
      created_at_i: 1646134868,
      _tags: ['comment', 'author_nonrandomstring', 'story_30500052'],
      objectID: '30512926',
      _highlightResult: {
        author: {
          value: 'nonrandomstring',
          matchLevel: 'none',
          matchedWords: [],
        },
        comment_text: {
          value:
            "Time has plenty to do with it.\u003cp\u003e\u0026gt; more sophisticated cognitive abilities than previously known\u003cp\u003eNo. More sophisticated cognitive abilities than previously modelled\nusing atemporal neural nets.\u003cp\u003eAnyone who has spent an afternoon being outwitted by a fly in their\nstudy knows that even a common housefly can be cunning beyond belief.\nIt's not just that their \u003cem\u003ereactio\u003c/em\u003en times out-pace humans. They seem to\nremember, anticipate, plan and even deceive.\u003cp\u003eThose faculties seem inexplicable by a bottom-up network of 100,000\nneurons using naive connectionist models we currently understand in\nartificial networks. That's because time is missing from the\nmodels. Biological networks are spiking, and (last I researched it)\ncan operate at up to 1kHz, and using integration, differentiation and\nnon-linear feedback can work like analogue computers (Hodgkin and\nIzhikevich models). Instead of sending simple activation thresholds\naround the network that's like sending network packets that can\nperform remote procedure calls.\u003cp\u003eAnd yes, they love bananas.",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Flies possess more sophisticated cognitive abilities than previously known',
          matchLevel: 'none',
          matchedWords: [],
        },
        story_url: {
          value:
            'https://ucsdnews.ucsd.edu/pressrelease/flies-possess-more-sophisticated-cognitive-abilities-than-previously-known',
          matchLevel: 'none',
          matchedWords: [],
        },
      },
    },
    {
      created_at: '2022-03-01T11:34:41.000Z',
      title: null,
      url: null,
      author: 'toshk',
      points: null,
      story_text: null,
      comment_text:
        'When I started with classes, I hardly had to read the docs, few hours and was good to go. For many developers I worked with at the time this was the case.\u003cp\u003eReact was easy coming from jQuery, Backbone other frameworks at the time.\u003cp\u003eWith effects, i\u0026#x27;ve read the docs many times. I still don\u0026#x27;t fully understand how it\u0026#x27;s supposed to work.\u003cp\u003eI don\u0026#x27;t seem to get the feeling \u0026#x2F; abstract constant of how it is supposed to work and it still suprises me at time when it fires \u0026#x2F; or not.\u003cp\u003eToo much magic for me. But maybe im getting old :).',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30512070,
      created_at_i: 1646134481,
      _tags: ['comment', 'author_toshk', 'story_30508524'],
      objectID: '30512868',
      _highlightResult: {
        author: { value: 'toshk', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            "When I started with classes, I hardly had to read the docs, few hours and was good to go. For many developers I worked with at the time this was the case.\u003cp\u003e\u003cem\u003eReact\u003c/em\u003e was easy coming from jQuery, Backbone other frameworks at the time.\u003cp\u003eWith effects, i've read the docs many times. I still don't fully understand how it's supposed to work.\u003cp\u003eI don't seem to get the feeling / abstract constant of how it is supposed to work and it still suprises me at time when it fires / or not.\u003cp\u003eToo much magic for me. But maybe im getting old :).",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Solid.js feels like what I always wanted \u003cem\u003eReact\u003c/em\u003e to be',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-\u003cem\u003ereact\u003c/em\u003e-to-be/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
      },
    },
    {
      created_at: '2022-03-01T11:31:37.000Z',
      title: null,
      url: null,
      author: 'Kuinox',
      points: null,
      story_text: null,
      comment_text:
        'I ran a profiling tool.  I searched \u0026quot;zz\u0026quot; then deleted these.\u003cp\u003eDeleting it caused a 120ms UI freeze (and I notice it :p):\u003cp\u003eProfiling report: \u003ca href="https:\u0026#x2F;\u0026#x2F;share.firefox.dev\u0026#x2F;3C3OhIq" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;share.firefox.dev\u0026#x2F;3C3OhIq\u003c/a\u003e\u003cp\u003eGiven I had slightly more entries (a hundred more) and that I had way more node per entry, it led me with way worse performance.\u003cp\u003eInstead of a plain list I have a little summary card per pokemon (which is why I have more node per entry).\u003cp\u003eThe naive implementation in Vue run flawlessly(sadly no preview):\u003cp\u003e\u003ca href="https:\u0026#x2F;\u0026#x2F;github.com\u0026#x2F;Kuinox\u0026#x2F;kuinox_pokedex\u0026#x2F;" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;github.com\u0026#x2F;Kuinox\u0026#x2F;kuinox_pokedex\u0026#x2F;\u003c/a\u003e\u003cp\u003eNote that the react implementation do weird thing because I tried to get around the issue without success.',
      num_comments: null,
      story_id: 30508524,
      story_title: 'Solid.js feels like what I always wanted React to be',
      story_url:
        'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/',
      parent_id: 30512622,
      created_at_i: 1646134297,
      _tags: ['comment', 'author_Kuinox', 'story_30508524'],
      objectID: '30512843',
      _highlightResult: {
        author: { value: 'Kuinox', matchLevel: 'none', matchedWords: [] },
        comment_text: {
          value:
            'I ran a profiling tool.  I searched \u0026quot;zz\u0026quot; then deleted these.\u003cp\u003eDeleting it caused a 120ms UI freeze (and I notice it :p):\u003cp\u003eProfiling report: \u003ca href="https://share.firefox.dev/3C3OhIq" rel="nofollow"\u003ehttps://share.firefox.dev/3C3OhIq\u003c/a\u003e\u003cp\u003eGiven I had slightly more entries (a hundred more) and that I had way more node per entry, it led me with way worse performance.\u003cp\u003eInstead of a plain list I have a little summary card per pokemon (which is why I have more node per entry).\u003cp\u003eThe naive implementation in Vue run flawlessly(sadly no preview):\u003cp\u003e\u003ca href="https://github.com/Kuinox/kuinox_pokedex/" rel="nofollow"\u003ehttps://github.com/Kuinox/kuinox_pokedex/\u003c/a\u003e\u003cp\u003eNote that the \u003cem\u003ereact\u003c/em\u003e implementation do weird thing because I tried to get around the issue without success.',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_title: {
          value:
            'Solid.js feels like what I always wanted \u003cem\u003eReact\u003c/em\u003e to be',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
        story_url: {
          value:
            'https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-\u003cem\u003ereact\u003c/em\u003e-to-be/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['reactjs'],
        },
      },
    },
  ],
  nbHits: 5746,
  page: 0,
  nbPages: 50,
  hitsPerPage: 20,
  exhaustiveNbHits: true,
  exhaustiveTypo: true,
  query: 'reactjs',
  params:
    'advancedSyntax=true\u0026analytics=true\u0026analyticsTags=backend\u0026query=reactjs',
  processingTimeMS: 13,
};

export default data;
