import { Injectable } from '@nestjs/common';
import { SkillCategory } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SkillsService {
  constructor(private readonly prisma: PrismaService) {}

  async findGrouped() {
    const skills = await this.prisma.skill.findMany({
      where: { published: true },
      orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }],
    });

    return {
      technical: skills.filter((s) => s.category === SkillCategory.TECHNICAL),
      frameworks: skills.filter((s) => s.category === SkillCategory.FRAMEWORK),
      tools: skills.filter((s) => s.category === SkillCategory.TOOL),
      databases: skills.filter((s) => s.category === SkillCategory.DATABASE),
      soft: skills.filter((s) => s.category === SkillCategory.SOFT),
    };
  }
}
