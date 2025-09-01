# Contributing to LGS Super

Thank you for your interest in contributing to LGS Super! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Guidelines](#contributing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and professional in all interactions.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/LGS_SUPER00X.git`
3. Add the upstream remote: `git remote add upstream https://github.com/tozsolutions/LGS_SUPER00X.git`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Setup

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis (optional)
- Docker (optional)

### Installation

1. Install dependencies:
   ```bash
   npm run setup
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. Start the database:
   ```bash
   docker-compose up -d database
   ```

4. Run migrations:
   ```bash
   cd server && npx prisma migrate dev
   ```

5. Start development:
   ```bash
   npm run dev
   ```

## Contributing Guidelines

### Types of Contributions

- **Bug Reports**: Use the bug report template
- **Feature Requests**: Use the feature request template
- **Code Contributions**: Follow the pull request process
- **Documentation**: Improve existing docs or add new ones
- **Testing**: Add or improve test coverage

### Before You Start

1. Check existing issues and PRs to avoid duplicates
2. For major changes, open an issue to discuss first
3. Ensure your local environment is set up correctly
4. Make sure all tests pass locally

## Pull Request Process

1. **Update your fork**:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**:
   - Write clear, concise commit messages
   - Follow coding standards
   - Add tests for new functionality
   - Update documentation as needed

4. **Test your changes**:
   ```bash
   npm run test
   npm run lint
   npm run build
   ```

5. **Commit and push**:
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**:
   - Use the PR template
   - Provide a clear description of changes
   - Link relevant issues
   - Request review from maintainers

### PR Requirements

- [ ] All tests pass
- [ ] Code is properly linted
- [ ] Documentation is updated
- [ ] Breaking changes are documented
- [ ] Commit messages follow conventional commits
- [ ] PR description is clear and complete

## Coding Standards

### JavaScript/TypeScript

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for formatting
- Prefer const over let
- Use meaningful variable names
- Add JSDoc comments for functions

### React/Next.js

- Use functional components with hooks
- Follow React best practices
- Use TypeScript interfaces for props
- Implement proper error boundaries
- Use semantic HTML elements

### Backend/Node.js

- Use async/await over callbacks
- Implement proper error handling
- Use Prisma for database operations
- Follow RESTful API conventions
- Add OpenAPI documentation

### Database

- Use descriptive table and column names
- Implement proper indexes
- Use migrations for schema changes
- Follow naming conventions

## Testing

### Test Requirements

- Write unit tests for new functions
- Add integration tests for API endpoints
- Test React components with React Testing Library
- Maintain minimum 80% code coverage

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Test Structure

```javascript
describe('Component/Function Name', () => {
  beforeEach(() => {
    // Setup
  })

  it('should do something specific', () => {
    // Test implementation
  })

  afterEach(() => {
    // Cleanup
  })
})
```

## Documentation

### Requirements

- Update README.md for significant changes
- Add JSDoc comments for public APIs
- Update API documentation
- Include examples in documentation
- Document breaking changes

### API Documentation

We use OpenAPI/Swagger for API documentation. Add documentation comments to route handlers:

```javascript
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 */
```

## Issue Templates

When creating issues, please use the appropriate template:

- **Bug Report**: For reporting bugs
- **Feature Request**: For requesting new features
- **Documentation**: For documentation improvements
- **Question**: For asking questions

## Branch Naming

Use descriptive branch names:

- `feature/user-authentication`
- `bugfix/login-error-handling`
- `docs/api-documentation`
- `refactor/database-queries`

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

Example:
```
feat: add user authentication system

- Implement JWT-based authentication
- Add login and registration endpoints
- Include password hashing
- Add authentication middleware

Closes #123
```

## Getting Help

If you need help:

1. Check the documentation
2. Search existing issues
3. Ask in discussions
4. Contact maintainers

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes
- GitHub contributors page

Thank you for contributing to LGS Super! 🚀