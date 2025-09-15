import { defineCollection, z } from 'astro:content';

const roleSchema = z.object({
  title: z.string(),
  begin: z.union([z.string(), z.date()]).transform(val => val instanceof Date ? val : new Date(val)),
  end: z.union([z.string(), z.date()]).transform(val => val instanceof Date ? val : new Date(val)),
  company: z.string(),
  companyURL: z.string(),
  companyIcon: z.string(),
  info: z.string().optional(),
  infoURL: z.string().optional(),
  stack: z.array(z.string()).optional(),
  design: z.array(z.string()).optional(),
  hiddenFromATS: z.boolean().optional().default(false),
  hidden: z.boolean().optional().default(false),
  suppressed: z.boolean().optional().default(false),
});

const roles = defineCollection({
  type: 'content',
  schema: roleSchema,
});

export type RoleData = z.infer<typeof roleSchema>;

const skillsSchema = z.record(
  z.union([
    z.array(z.string()),
    z.record(z.array(z.string()))
  ])
);

const summarySections = defineCollection({
  type: 'content',
  schema: skillsSchema,
});

export const collections = {
  roles,
  'summary-sections': summarySections,
};
