# **Project Feedback Flow Application**

## **Core Purpose**

A guided decision-tree application that helps students track their project progress and directs them to appropriate resources/actions based on their current status.

## **Key Technical Specifications**

### **UI/UX**

* Single-page application with two main components:  
  * Interactive SVG visualization showing the complete decision tree  
  * Card component displaying the current question/action  
* Brand colors:  
  * Primary gradient: \#E6196B (top right) → \#CF13B3 (center) → \#8D0BD1 (bottom left)  
  * Text on light: \#616166  
  * Text on dark: \#A6A6A8  
  * Black: \#070614  
  * White: \#FFFFFF  
  * Off-white: \#F5F5F7  
* Typography  
  * Montserrat bold for titles  
  * Montserrat regular for text

### **Core Features**

1. **Decision Tree Visualization**  
   * SVG-based visualization showing:  
     * Circular nodes for questions  
     * Square nodes for endpoints (actions)  
     * Curved connection lines between nodes  
   * Two visual states:  
     * Active path: Fully opaque nodes and connections  
     * Inactive paths: 20% opacity  
   * Real-time path highlighting as users progress  
2. **Interactive Flow**  
   * Initial welcome screen with "Start" button  
   * Yes/No questions with gradient-styled buttons  
   * Action endpoints linking to a Google Docs template  
   * All external links target: "[https://docs.google.com/document/d/11KHVabSL66jg\_E\_y-bpeImjQ5rvi3wZZbBAHKJ7Akdc/edit?tab=t.0](https://docs.google.com/document/d/11KHVabSL66jg_E_y-bpeImjQ5rvi3wZZbBAHKJ7Akdc/edit?tab=t.0)"

### **Data Structure**

typescript  
Copy  
type Node \= {  
  question?: string;  
  activity?: string;  
  type?: 'intro' | 'question';  
  endpoint?: boolean;  
  next?: string;  
  yes?: string;  
  no?: string;  
  buttons?: Array\<{  
    text: string;  
    url: string;  
  }\>;  
};

type Flowchart \= Record\<string, Node\>;

### **Naming Conventions**

* All user visible text is in Dutch  
* Questions: `Vraag[Description]` (e.g., VraagTakenlijst)  
* Actions: `Actie[Description]` (e.g., ActieOnderzoek)

### **Technical Requirements**

* Built with React and TypeScript  
* Uses shadcn/ui components for UI elements  
* SVG for visualization  
* Tailwind for styling  
* Smooth transitions (300ms duration)  
* Responsive design

### **State Management**

* Tracks:  
  1. Current node position  
  2. Complete path history  
  3. Transition states for animations

## **Design Principles**

1. Visual Clarity: Complete flow visible but subdued, with active path highlighted  
2. Progressive Disclosure: One question/action at a time  
3. Persistent Context: Always showing position in overall flow  
4. Smooth Transitions: All state changes are animated  
5. Error Prevention: Clear, binary choices  
6. Easy Reset: Option to start over at any point

## **Nice-to-Have Features**

1. Hover states for nodes showing question/action text  
2. Progress indicators  
3. Path history navigation  
4. Local storage for progress persistence  
5. Loading states for external link navigation

