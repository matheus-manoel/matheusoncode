import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle2, Circle, ChevronDown, ChevronUp } from 'lucide-react';

const PracticeDashboard = () => {
  const categories = {
    'Array': [
      { id: 1, name: 'Two Sum', difficulty: 'Easy', time: '15 mins', link: 'https://leetcode.com/problems/two-sum/' },
      { id: 2, name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', time: '20 mins', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
      { id: 3, name: 'Insert Interval', difficulty: 'Medium', time: '25 mins', link: 'https://leetcode.com/problems/insert-interval/' },
      { id: 4, name: '3Sum', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/3sum/' },
      { id: 5, name: 'Product of Array Except Self', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/product-of-array-except-self/' },
      { id: 6, name: 'Combination Sum', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/combination-sum/' },
      { id: 7, name: 'Merge Intervals', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/merge-intervals/' },
      { id: 8, name: 'Majority Element', difficulty: 'Easy', time: '20 mins', link: 'https://leetcode.com/problems/majority-element/' },
      { id: 9, name: 'Sort Colors', difficulty: 'Medium', time: '25 mins', link: 'https://leetcode.com/problems/sort-colors/' },
      { id: 10, name: 'Contains Duplicate', difficulty: 'Easy', time: '15 mins', link: 'https://leetcode.com/problems/contains-duplicate/' },
      { id: 11, name: 'Container With Most Water', difficulty: 'Medium', time: '35 mins', link: 'https://leetcode.com/problems/container-with-most-water/' }
    ],
    'String': [
      { id: 12, name: 'Valid Palindrome', difficulty: 'Easy', time: '15 mins', link: 'https://leetcode.com/problems/valid-palindrome/' },
      { id: 13, name: 'Valid Anagram', difficulty: 'Easy', time: '15 mins', link: 'https://leetcode.com/problems/valid-anagram/' },
      { id: 14, name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
      { id: 15, name: 'Longest Palindrome', difficulty: 'Easy', time: '20 mins', link: 'https://leetcode.com/problems/longest-palindrome/' },
      { id: 16, name: 'Minimum Window Substring', difficulty: 'Hard', time: '30 mins', link: 'https://leetcode.com/problems/minimum-window-substring/' },
      { id: 17, name: 'String to Integer (atoi)', difficulty: 'Medium', time: '25 mins', link: 'https://leetcode.com/problems/string-to-integer-atoi/' },
      { id: 18, name: 'Longest Palindromic Substring', difficulty: 'Medium', time: '25 mins', link: 'https://leetcode.com/problems/longest-palindromic-substring/' },
      { id: 19, name: 'Find All Anagrams in a String', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/' }
    ],
    'Matrix': [
      { id: 20, name: 'Spiral Matrix', difficulty: 'Medium', time: '25 mins', link: 'https://leetcode.com/problems/spiral-matrix/' }
    ],
    'Binary Search': [
      { id: 21, name: 'Binary Search', difficulty: 'Easy', time: '15 mins', link: 'https://leetcode.com/problems/binary-search/' },
      { id: 22, name: 'First Bad Version', difficulty: 'Easy', time: '20 mins', link: 'https://leetcode.com/problems/first-bad-version/' },
      { id: 23, name: 'Search in Rotated Sorted Array', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
      { id: 24, name: 'Time Based Key-Value Store', difficulty: 'Medium', time: '35 mins', link: 'https://leetcode.com/problems/time-based-key-value-store/' },
      { id: 25, name: 'Maximum Profit in Job Scheduling', difficulty: 'Hard', time: '45 mins', link: 'https://leetcode.com/problems/maximum-profit-in-job-scheduling/' }
    ],
    'Graph': [
      { id: 26, name: 'Flood Fill', difficulty: 'Easy', time: '20 mins', link: 'https://leetcode.com/problems/flood-fill/' },
      { id: 27, name: '01 Matrix', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/01-matrix/' },
      { id: 28, name: 'Clone Graph', difficulty: 'Medium', time: '25 mins', link: 'https://leetcode.com/problems/clone-graph/' },
      { id: 29, name: 'Course Schedule', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/course-schedule/' },
      { id: 30, name: 'Number of Islands', difficulty: 'Medium', time: '25 mins', link: 'https://leetcode.com/problems/number-of-islands/' },
      { id: 31, name: 'Rotting Oranges', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/rotting-oranges/' },
      { id: 32, name: 'Accounts Merge', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/accounts-merge/' },
      { id: 33, name: 'Word Ladder', difficulty: 'Hard', time: '45 mins', link: 'https://leetcode.com/problems/word-ladder/' },
      { id: 34, name: 'Word Search', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/word-search/' },
      { id: 35, name: 'Minimum Height Trees', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/minimum-height-trees/' }
    ],
    'Binary Search Tree': [
      { id: 36, name: 'Lowest Common Ancestor of a Binary Search Tree', difficulty: 'Easy', time: '20 mins', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/' },
      { id: 37, name: 'Validate Binary Search Tree', difficulty: 'Medium', time: '20 mins', link: 'https://leetcode.com/problems/validate-binary-search-tree/' },
      { id: 38, name: 'Kth Smallest Element in a BST', difficulty: 'Medium', time: '25 mins', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/' }
    ],
    'Binary Tree': [
      { id: 39, name: 'Invert Binary Tree', difficulty: 'Easy', time: '15 mins', link: 'https://leetcode.com/problems/invert-binary-tree/' },
      { id: 40, name: 'Balanced Binary Tree', difficulty: 'Easy', time: '15 mins', link: 'https://leetcode.com/problems/balanced-binary-tree/' },
      { id: 41, name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', time: '20 mins', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
      { id: 42, name: 'Lowest Common Ancestor of a Binary Tree', difficulty: 'Medium', time: '25 mins', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/' },
      { id: 43, name: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', time: '40 mins', link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' },
      { id: 44, name: 'Diameter of Binary Tree', difficulty: 'Easy', time: '30 mins', link: 'https://leetcode.com/problems/diameter-of-binary-tree/' },
      { id: 45, name: 'Binary Tree Right Side View', difficulty: 'Medium', time: '20 mins', link: 'https://leetcode.com/problems/binary-tree-right-side-view/' },
      { id: 46, name: 'Maximum Depth of Binary Tree', difficulty: 'Easy', time: '15 mins', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
      { id: 47, name: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: 'Medium', time: '25 mins', link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/' }
    ],
    'Hash Table': [
      { id: 48, name: 'Ransom Note', difficulty: 'Easy', time: '15 mins', link: 'https://leetcode.com/problems/ransom-note/' }
    ],
    'Recursion': [
      { id: 49, name: 'Permutations', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/permutations/' },
      { id: 50, name: 'Subsets', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/subsets/' },
      { id: 51, name: 'Letter Combinations of a Phone Number', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/' }
    ],
    'Linked List': [
      { id: 52, name: 'Merge Two Sorted Lists', difficulty: 'Easy', time: '20 mins', link: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
      { id: 53, name: 'Linked List Cycle', difficulty: 'Easy', time: '20 mins', link: 'https://leetcode.com/problems/linked-list-cycle/' },
      { id: 54, name: 'Reverse Linked List', difficulty: 'Easy', time: '20 mins', link: 'https://leetcode.com/problems/reverse-linked-list/' },
      { id: 55, name: 'Middle of the Linked List', difficulty: 'Easy', time: '20 mins', link: 'https://leetcode.com/problems/middle-of-the-linked-list/' },
      { id: 56, name: 'LRU Cache', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/lru-cache/' }
    ],
    'Stack': [
      { id: 57, name: 'Valid Parentheses', difficulty: 'Easy', time: '20 mins', link: 'https://leetcode.com/problems/valid-parentheses/' },
      { id: 58, name: 'Implement Queue using Stacks', difficulty: 'Easy', time: '20 mins', link: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
      { id: 59, name: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
      { id: 60, name: 'Min Stack', difficulty: 'Medium', time: '20 mins', link: 'https://leetcode.com/problems/min-stack/' },
      { id: 61, name: 'Trapping Rain Water', difficulty: 'Hard', time: '35 mins', link: 'https://leetcode.com/problems/trapping-rain-water/' },
      { id: 62, name: 'Basic Calculator', difficulty: 'Hard', time: '40 mins', link: 'https://leetcode.com/problems/basic-calculator/' },
      { id: 63, name: 'Largest Rectangle in Histogram', difficulty: 'Hard', time: '35 mins', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' }
    ],
    'Heap': [
      { id: 64, name: 'K Closest Points to Origin', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/k-closest-points-to-origin/' },
      { id: 65, name: 'Find Median from Data Stream', difficulty: 'Hard', time: '30 mins', link: 'https://leetcode.com/problems/find-median-from-data-stream/' },
      { id: 66, name: 'Merge k Sorted Lists', difficulty: 'Hard', time: '30 mins', link: 'https://leetcode.com/problems/merge-k-sorted-lists/' },
      { id: 67, name: 'Task Scheduler', difficulty: 'Medium', time: '35 mins', link: 'https://leetcode.com/problems/task-scheduler/' }
    ],
    'Trie': [
      { id: 68, name: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', time: '35 mins', link: 'https://leetcode.com/problems/implement-trie-prefix-tree/' },
      { id: 69, name: 'Word Break', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/word-break/' }
    ],
    'Dynamic Programming': [
      { id: 70, name: 'Maximum Subarray', difficulty: 'Medium', time: '20 mins', link: 'https://leetcode.com/problems/maximum-subarray/' },
      { id: 71, name: 'Coin Change', difficulty: 'Medium', time: '25 mins', link: 'https://leetcode.com/problems/coin-change/' },
      { id: 72, name: 'Climbing Stairs', difficulty: 'Easy', time: '20 mins', link: 'https://leetcode.com/problems/climbing-stairs/' },
      { id: 73, name: 'Partition Equal Subset Sum', difficulty: 'Medium', time: '30 mins', link: 'https://leetcode.com/problems/partition-equal-subset-sum/' },
      { id: 74, name: 'Unique Paths', difficulty: 'Medium', time: '20 mins', link: 'https://leetcode.com/problems/unique-paths/' }
    ],
    'Binary': [
      { id: 75, name: 'Add Binary', difficulty: 'Easy', time: '15 mins', link: 'https://leetcode.com/problems/add-binary/'}
    ]  
  }

    // Initialize with empty sets
  const [completedProblems, setCompletedProblems] = useState(new Set());
  const [expandedSections, setExpandedSections] = useState(new Set());
  
  // Load data from localStorage only after component mounts
  useEffect(() => {
    try {
      const savedProblems = localStorage.getItem('completedProblems');
      if (savedProblems) {
        setCompletedProblems(new Set(JSON.parse(savedProblems)));
      }

      const savedSections = localStorage.getItem('expandedSections');
      if (savedSections) {
        setExpandedSections(new Set(JSON.parse(savedSections)));
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
  }, []);

  // Save to localStorage whenever completedProblems changes
  useEffect(() => {
    try {
      localStorage.setItem('completedProblems', JSON.stringify([...completedProblems]));
    } catch (error) {
      console.error('Error saving completed problems to localStorage:', error);
    }
  }, [completedProblems]);

  // Save expanded sections to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('expandedSections', JSON.stringify([...expandedSections]));
    } catch (error) {
      console.error('Error saving expanded sections to localStorage:', error);
    }
  }, [expandedSections]);

  const toggleProblem = (id) => {
    setCompletedProblems(prev => {
      const newCompleted = new Set(prev);
      if (newCompleted.has(id)) {
        newCompleted.delete(id);
      } else {
        newCompleted.add(id);
      }
      return newCompleted;
    });
  };

  const toggleSection = (category) => {
    setExpandedSections(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(category)) {
        newExpanded.delete(category);
      } else {
        newExpanded.add(category);
      }
      return newExpanded;
    });
  };

  const calculateProgress = (problems) => {
    const completed = problems.filter(p => completedProblems.has(p.id)).length;
    return Math.round((completed / problems.length) * 100);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-emerald-500';
      case 'medium': return 'text-amber-500';
      case 'hard': return 'text-rose-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Blind 75</h1>
          <p className="text-gray-600">Acompanhe seu progresso na Blind 75</p>
        </div>
        
        <div className="space-y-4">
          {Object.entries(categories).map(([category, problems]) => {
            const progress = calculateProgress(problems);
            const completedCount = problems.filter(p => completedProblems.has(p.id)).length;
            
            return (
              <Card 
                key={category} 
                className="overflow-hidden border-0 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <div 
                  className="cursor-pointer transition-colors duration-200 hover:bg-gray-50"
                  onClick={() => toggleSection(category)}
                >
                  <CardHeader className="flex flex-row items-center justify-between p-6">
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-semibold text-gray-900">{category}</CardTitle>
                      <div className="text-sm text-gray-500 font-medium">
                        {completedCount} / {problems.length} completed
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 transition-all duration-300 rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <span className="text-lg font-semibold text-gray-700">
                          {progress}%
                        </span>
                      </div>
                      {expandedSections.has(category) ? 
                        <ChevronUp className="h-5 w-5 text-gray-400" /> : 
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      }
                    </div>
                  </CardHeader>
                </div>

                {expandedSections.has(category) && (
                  <CardContent className="bg-white p-4">
                    <div className="space-y-1">
                      {problems.map((problem) => (
                        <div
                          key={problem.id}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                          onClick={() => toggleProblem(problem.id)}
                        >
                          <div className="flex items-center gap-3">
                            {completedProblems.has(problem.id) ? 
                              <CheckCircle2 className="w-5 h-5 text-emerald-500 transition-colors duration-200" /> :
                              <Circle className="w-5 h-5 text-gray-300 transition-colors duration-200" />
                            }
                            <a
                              href={problem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {problem.name}
                            </a>
                          </div>
                          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getDifficultyColor(problem.difficulty)} bg-opacity-10`}>
                            {problem.difficulty}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PracticeDashboard;
