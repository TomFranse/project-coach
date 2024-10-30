/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from 'react';
import { Node } from '../types/flowchart';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface InteractionCardProps {
  node: Node;
  onAnswer: (answer: 'yes' | 'no') => void;
  onNext: () => void;
  onButtonClick: (url: string) => void;
}

export const InteractionCard: React.FC<InteractionCardProps> = ({
  node,
  onAnswer,
  onNext,
  onButtonClick,
}) => {
  return (
    <Card className="w-full bg-white/90 backdrop-blur-lg shadow-xl">
      <CardHeader className="border-b border-gray-100">
        <CardTitle>
          {node.activity || 'Project Feedback Helper'}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {node.question && (
          <p className="text-lg text-[#616166] mb-6">{node.question}</p>
        )}
        
        <div className="space-y-4">
          {node.type === 'question' && !node.endpoint && (
            <div className="grid grid-cols-2 gap-4">
              <Button onClick={() => onAnswer('yes')}>
                <ArrowRight className="h-4 w-4 mr-2" />
                Ja
              </Button>
              <Button variant="outline" onClick={() => onAnswer('no')}>
                Nee
              </Button>
            </div>
          )}
          
          {node.buttons && node.buttons.length > 0 && (
            <div className="space-y-2">
              {node.buttons.map((button, index) => (
                <Button
                  key={index}
                  onClick={() => onButtonClick(button.url)}
                  className="w-full"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {button.text}
                </Button>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}; 