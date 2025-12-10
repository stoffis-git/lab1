# Funnel Archive

This folder contains the original funnel/wizard code that was previously used on the get-started page.

## Files

- `GetStartedClient.tsx` - Main funnel client component with all step logic
- `GetStartedWrapper.tsx` - Wrapper component with Suspense for loading states

## What it does

The funnel was a multi-step wizard that guided users through:
1. Product line selection (Essential vs Core)
2. Demographic selection (for Essential)
3. Goal selection (for Core)
4. Testing method selection
5. Product display and checkout

## When to restore

If you want to bring back the funnel/wizard experience instead of the current product portfolio page, you can:
1. Move these files back to the parent directory
2. Update `app/get-started/page.tsx` to import and use `GetStartedWrapper`
3. Restore the funnel-specific CSS from `page.css` (currently removed)

## Note

The funnel CSS styles are still in `app/get-started/page.css` but commented out or removed. You may need to restore them from git history if needed.



