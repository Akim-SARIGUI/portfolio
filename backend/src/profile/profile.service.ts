import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne() {
    const profile = await this.prisma.profile.findFirst();
    if (!profile) throw new NotFoundException('Profil introuvable');
    return profile;
  }
}
