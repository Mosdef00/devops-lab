/**
* GET /version → { version: "<package.json version>" }
* Reads version from package.json to keep it source-of-truth.
* DEVOPS-1: reuses getPackageInfo() instead of re-reading package.json here.
*/
import { Router } from 'express'
import { getPackageInfo } from '../../utils/appInfo.js'
const router = Router()
router.get('/version', (_req, res) => {
  const { version } = getPackageInfo()
  res.status(200).json({ version })
})
export default router
