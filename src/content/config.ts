// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import {format} from 'date-fns';



// 3. Define your collection(s)
const postsCollection = defineCollection({
    schema:z.object({
        author:z.string(),
        categories:z.array(z.string()),
        title:z.string(),
        date:z.string().transform(str=>format(new Date(str), 'MM-dd-yyyy')),
        featured:z.boolean().default(false),
    }),
  });

// 4. Export a single `collections` object to register your collection(s)
export const collections = {
    posts: postsCollection,
};