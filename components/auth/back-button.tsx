"use client"

import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

interface backButtonProps {
    label: string;
    href: string;
}

export const Backbutton = ({
    label,
    href
}: backButtonProps) => {
    return (
        <div>
            <Button
                variant="link"
                className="font-normal w-full"
                size="lg"
                asChild
            >
                <Link href={href}>
                    {label}
                </Link>
            </Button>
        </div>
    )
}
